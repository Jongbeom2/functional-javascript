/**
 * @name : map
 * @argument : args, func
 * @returns : newList
 * @description : 배열과 유사한 args를 받아 func에 인자로 전달하여 반환된 값을 새로운 배열에 넣어 반환
*/
const forEach = require('./forEach');
function map(args, func) {
  const newList = [];
  forEach(args, arg => {
    newList.push(func(arg));
  })
  return newList;
}

module.exports = map;