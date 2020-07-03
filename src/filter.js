/**
 * @name : filter
 * @argument : args, func
 * @returns : newList
 * @description : 배열과 유사한 args를 받아 func에 인자로 전달하여 true가 나오게하는 요소만 새로운 배열에 넣어 반환
*/
const forEach = require('./forEach');
function filter(args, func) {
  const newList = [];
  forEach(args, arg => {
    if (func(arg)) {
      newList.push(arg);
    }
  })
  return newList;
}

module.exports = filter;