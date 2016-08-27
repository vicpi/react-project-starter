/* eslint no-console: 0 */

import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from './src/js/routes';
import { Provider }              from 'react-redux';
import * as reducers             from './src/js/reducers';
import promiseMiddleware         from './src/js/lib/promiseMiddleware';
import fetchComponentData        from './src/js/lib/fetchComponentData';
import { createStore,
         combineReducers,
         applyMiddleware }       from 'redux';

const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack/webpack.prod.config.js');


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 80;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  //app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });
} else {
//  app.get('*', function response(req, res) {
//    res.sendFile(path.join(__dirname, 'build/index.html'));
//  });
app.use('/static', express.static(__dirname + '/build'));


app.get('*', function response(req, res) {
    const location = createLocation(req.url);
    const reducer  = combineReducers(reducers);
    const store    = applyMiddleware(promiseMiddleware)(createStore)(reducer);

    match({ routes, location }, (err, redirectLocation, renderProps) => {
      if(err) {
        console.error(err);
        return res.status(500).end('Internal server error');
      }

      if(!renderProps)
        return res.status(404).end('Not found');

      function renderView() {
        const InitialView = (
          <Provider store={store}>
            <RoutingContext {...renderProps} />
          </Provider>
        );

        const componentHTML = renderToString(InitialView);

        const initialState = store.getState();
        // include webpack chunks into index html
        const assetsMap = JSON.parse(fs.readFileSync(path.join(__dirname, 'build/manifest.json'), 'utf8'));
        const htmlTemplate = fs.readFileSync(path.join(__dirname, 'build/production.html'), 'utf8');
        var template = handlebars.compile(htmlTemplate);
        var context = {
          'app_css': '/static/' + assetsMap['app.css'],
          'app_js': '/static/' + assetsMap['app.js'],
          'vendor_js': '/static/' + assetsMap['vendor.js'],
          'initial': JSON.stringify(initialState),
          'rendered_html': componentHTML
        };
        var html    = template(context);



        return html;
      }

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(renderView)
        .then(html => res.end(html))
        .catch(err => res.end(err.message));
    });
  });
}

export default app;
