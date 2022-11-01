'use strict';

var errors = require('./index.js');

var notFound = new errors.NotFound('Didn\'t find the user');

console.log('Status:', notFound.status);
console.log('Message:', notFound.message);
console.log('Is istance of NotFound:', notFound instanceof errors.NotFound);