'use strict';

require('babel-core/register')({
    'plugins': [
        [
            'babel-plugin-transform-require-ignore',
            {
                extensions: ['.less', '.scss', '.css', '.svg']
            }
        ]
    ]
});
require('babel-polyfill');

var server = require('./server').default;
