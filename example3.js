const pipe = require('./pipe');
const go = require('./go');

let p1 = pipe(
  a=>a+1,
  a=>a*2,
  a=>a*a
);
console.log(p1(1));

go(
  1,
  a=>a+1,
  a=>a+2,
  a=>a+3,
  console.log
)