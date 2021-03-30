'use strict';

exports.encode = function encode(ab) {
  return Buffer.from(ab).toString('base64');
};

exports.decode = function decode(str) {
  var b = Buffer.from(str, 'base64');
  return new Uint8Array(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
};
