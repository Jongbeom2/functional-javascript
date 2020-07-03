const pipe = require('./pipe');
function go(arg) {
  let funcList = Array.prototype.slice.call(arguments, 1) ;
  pipe.apply(null,funcList)(arg);
}
module.exports = go;