import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack/webpack.dev.config.js';
import Express from 'express';

const app = new Express();
const port = 3001;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, error => {
    /* eslint-disable no-console */
    if (error) {
        console.error(error);
        return;
    } else {
        console.info(
            '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
            port,
            port
        );
    }
    /* eslint-enable no-console */
});
