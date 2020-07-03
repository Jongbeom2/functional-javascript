/**
 * @name : forEach
 * @argument : args, func
 * @returns : args
 * @description : 배열과 유사한 args를 받아 func에 인자로 전달하고 args를 반환
 * 인자로 null이나 undefined를 받으면 인자를 []로 받도록 keys 사용
 * 인자로 obj를 받으면 인자의 value를 func에 인자로 전달하도록 keys 사용
*/
const keys = require('./keys');
function forEach(args, func) {
  let keyList = keys(args);
  for (let i = 0; i < keyList.length; i++) {
    func(args[keyList[i]]);
  }
  return args;
}
module.exports = forEach;