const farmhash = require('farmhash').fingerprint64;
const base62 = require('./base62.js').encode;

module.exports = b => base62(farmhash(b));
