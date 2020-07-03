const pipe = require('./src/pipe');
const go = require('./src/go');

let p1 = pipe(
  a=>a+1,
  a=>a*2,
  a=>a*a
);
console.log(p1(1)); // 16

go(
  1,
  a=>a+1,
  a=>a+2,
  a=>a+3,
  console.log
); // 7