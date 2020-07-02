const reduce = require('./reduce');
function pipe() {
  let funcList = arguments;
  return function (arg) {
    return reduce(funcList, function (arg, func) {
      return func(arg)
    }, arg);
  }
}
module.exports = pipe;