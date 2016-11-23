var ReactDOM = require('react-dom');

import {module} from './targetModule';

var rootElement = document.getElementById('module');
ReactDOM.render(
    module,
    rootElement
);
