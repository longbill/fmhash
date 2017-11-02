const farmhash = require('farmhash');
const base62 = require('base62').encode;

module.exports = function(b) {
	if (!Buffer.isBuffer(b)) b = new Buffer(b);
	let hash = base62(farmhash.fingerprint32( b.slice(0, Math.ceil(b.length / 2)) )) + base62(farmhash.fingerprint32( b ));
	while (hash.length < 12) hash += '0';
	return hash;
};
