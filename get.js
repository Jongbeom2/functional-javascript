/**
 * @name : get
 * @argument : obj, key
 * @returns : obj[key] 또는 undfined
 * @description : obj의 key값을 안전하게 가져오는 함수.
 * obj가 null이거나 undefined이면 undefined 반환.
*/
const curryr = require('./curryr');
const get = curryr((obj, key) => {
  return obj == null ? undefined : obj[key];
})
module.exports = get;