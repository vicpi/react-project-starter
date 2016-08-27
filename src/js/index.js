'use strict';

require('babel-core/register')({
  'plugins': [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.less', '.scss']
      }
    ]
  ]
});
require('babel-polyfill');

var server = require('../../server').default;

const PORT = process.env.PORT || 80;

server.listen(PORT, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('App listening on port 0.0.0.0:' + PORT);
});
