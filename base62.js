const BASE62 = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
	"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
	"u", "v", "w", "x", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
	"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
	"U", "V", "W", "X", "Y", "Z"
];

function base62Decode(str) {
	let num = 0;
	let len = str.length;
	for (let i = 0; i < len; i++) {
		let n = len - i - 1;
		let s = str[i];
		num += BASE62.indexOf(s) * Math.pow(62, n);
	}
	return num;
}

function base62Encode(num) {
	let str = '';
	let r = 0;
	while (num !== 0 && str.length < 100) {
		r = num % 62;
		str = BASE62[r] + str;
		num = Math.floor(num / 62);
	}
	return str;
}

module.exports.decode = function (hash) {
	let id = '';
	for (let end = hash.length; end > 0; end -= 4) {
		let start = Math.max(end - 4, 0);
		let h = hash.substring(start, end);
		let n = String(base62Decode(h));
		let padding = 7 - n.length;
		if (padding > 0 && start > 0) {
			for (; padding > 0; padding--) n = '0' + n; 
		}
		id = n + id;
	}
	return id;
};

module.exports.encode = function (id) {
	let hash = '';
	for (let end = id.length; end > 0; end -= 7) {
		let start = Math.max(end - 7, 0);
		let num = id.substring(start, end);
		let h = base62Encode(num);
		let padding = 4 - h.length;
		if (padding > 0 && start > 0) {
			for (; padding > 0; padding--) h = '0' + h;
		}
		hash = h + hash;
	}
	return hash;
};

