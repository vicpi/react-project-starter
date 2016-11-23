//noinspection JSUnresolvedVariable
import {
    renderToString,
    renderToStaticMarkup
} from 'react-dom/server'
import fs from 'fs';

import {module} from './targetModule';
const markup = renderToStaticMarkup(module);

var html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React</title>
  <link rel="stylesheet" href="file:///Users/vpyskunov/Sites/react-project-starter/export/build/css/app.css" />
</head>
<body>

<div id="module">${markup}</div>

<!-- Include app.js -->
<script type="text/javascript" src="file:///Users/vpyskunov/Sites/react-project-starter/export/build/js/app.js"></script>
</body>
</html>
`;

// Write simple wrapper for module markup in order to look at it in browser
fs.writeFile("./export/build/app.html", html, function(err) {
    if (err) {
        return console.log(err);
    }
});

// Write only module markup to module.html
fs.writeFile("./export/build/module.html", markup, function(err) {
    if (err) {
        return console.log(err);
    }
});
