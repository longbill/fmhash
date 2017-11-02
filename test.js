const fmhash = require('./');
const crypto = require('crypto');

console.log('hash of "abc" is', fmhash(new Buffer('abc')));

console.log('start calculating 1,000,000 hashes ... ');
let t1 = Date.now();

for (let i = 0; i < 1000000; i++) {
	let str = `${i}fafdsa${i}jkjkjkwe${i}`;
	let hash = fmhash(str);
}

console.log(`time spent ${Date.now() - t1}ms`);

console.log('hash of "abc" is', fmhash('abc'));