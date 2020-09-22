//document.write('Hello');
var lodash = require('lodash')

var result = lodash.chunk(['a','b','c','d'],3)
console.log(result);

// modern browser does not require() function
// you can run your script using: node test.js