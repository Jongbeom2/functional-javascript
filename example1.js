const curry = require('./src/curry');
const curryr = require('./src/curryr');

const add = curry((a, b) => a + b);
const add3 = add(3);
console.log(add(3, 2)); // 5
console.log(add(3)(2)); // 5
console.log(add3(2)); // 5

const sub = curryr((a, b) => a - b);
const sub3 = sub(3);
console.log(sub(2, 3)); // -1
console.log(sub(3)(2)); // -1
console.log(sub3(2)); // -1

