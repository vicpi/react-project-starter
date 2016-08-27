import '../styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore  from './store/configureStore';
import {Router, browserHistory, hashHistory} from 'react-router';
import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('app');

let rootComponent;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default;

  // If using routes
  rootComponent = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
  // rootComponent = (
  //   <div>
  //     <Router history={browserHistory} routes={routes} />
  //     <DevTools />
  //   </div>
  // );
} else {
  rootComponent = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
}

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    {rootComponent}
  </Provider>,
  rootElement
);
