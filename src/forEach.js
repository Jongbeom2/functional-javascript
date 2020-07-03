/**
 * @name : forEach
 * @argument : args, func
 * @returns : args
 * @description : 배열과 유사한 args를 받아 func에 인자로 전달하고 args를 반환
*/
function forEach(args, func) {
  for (let i = 0; i < args.length; i++) {
    func(args[i]);
  }
  return args;
}
module.exports = forEach;