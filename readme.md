fmhash
======

Use `farmhash`'s fingerprint32 two times, then encode the result to base62 to generate a 12 characters string.

`npm install fmhash`

## Usage ##

```javascript
const fmhash = require('fmhash');

console.log( fmhash('string or buffer') );
```