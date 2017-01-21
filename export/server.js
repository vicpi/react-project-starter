//noinspection JSUnresolvedVariable
import {
    renderToString,
    renderToStaticMarkup
} from 'react-dom/server'
import fs from 'fs';
import config from './config.json';

import {module} from './targetModule';
const markup = renderToStaticMarkup(module);
const wrapperId = config.wrapperId;
const componentHtml = `<div id="${wrapperId}">${markup}</div>`;

var html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React</title>
  <link rel="stylesheet" href="file:///Users/vpyskunov/Sites/react-project-starter/export/dist/css/app.css" />
</head>
<body>

${componentHtml}

<!-- Include app.js -->
<script type="text/javascript" src="file:///Users/vpyskunov/Sites/react-project-starter/export/dist/js/app.js"></script>
<script type="text/javascript" src="file:///Users/vpyskunov/Sites/react-project-starter/export/dist/js/vendor.bundle.js"></script>
</body>
</html>
`;

// Write simple wrapper for module markup in order to look at it in browser
fs.writeFile("./export/dist/app.html", html, function(err) {
  if (err) {
    return console.log(err);
  }
});

// Write only module markup to module.html
fs.writeFile("./export/dist/module.html", componentHtml, function(err) {
  if (err) {
    return console.log(err);
  }
});
