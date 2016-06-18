'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
    var data = event.body;
    var config = require('./config.json');
    callback(null, 'DATA: ' + typeof config + ' | ' + JSON.stringify(config));
};

exports.handler({}, {}, console.log.bind(console));