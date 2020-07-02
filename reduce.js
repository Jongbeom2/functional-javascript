/**
 * @name : redyce
 * @argument : args, func, memo
 * @returns : memo
 * @description : 배열과 유사한 args를 받아 func에 memo, 요소를 인자로 전달하여 반환된 값을 memo에 저장하고 memo를 반환.
 * memo를 인자로 전달하지 않으면 첫 번째 요소를 memo로 가정하고 args에 첫 번째 요소는 제외.
*/
const forEach = require('./forEach')
function reduce(args, func, memo) {
  if (arguments.length === 2) {
    memo = args[0];
    args = Array.prototype.slice.call(args, 1)
  }
  forEach(args, (val) => {
    memo = func(memo, val);
  })
  return memo;
}
module.exports = reduce;