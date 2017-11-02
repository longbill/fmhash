const farmhash = require('farmhash').fingerprint32;
const base62 = require('base62').encode;

module.exports = function(b) {
	let hash = base62(farmhash( b.slice(0, Math.ceil(b.length / 2)) )) + base62(farmhash( b ));
	while (hash.length < 12) hash += '0';
	return hash;
};
