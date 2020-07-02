/**
 * @name : curry
 * @argument : func
 * @returns : a, b를 인자로 받는 함수
 * @description : a만 인자로 받으면 b를 인자로 받아 func(a, b)를 반환하는 함수를 반환.
 * 만약 a, b를 인자로 받으면 func(a, b)를 반환하는 함수를 반환.
*/
function curry(func) {
  return function (a, b) {
    return arguments.length === 2 ? func(a, b) : b => (func(a, b))
  };
}
module.exports = curry