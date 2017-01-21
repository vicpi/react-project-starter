var ReactDOM = require('react-dom');

import {module} from './targetModule';
import config from './config.json';

var wrapperId = config.wrapperId;
var rootElement = document.getElementById(wrapperId);
ReactDOM.render(
  module,
  rootElement
);
