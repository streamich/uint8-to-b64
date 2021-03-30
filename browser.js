var base64js = require('base64-js');

exports.encode = base64js.fromByteArray;
exports.decode = base64js.toByteArray;
