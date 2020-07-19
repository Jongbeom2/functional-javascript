const userList = require('./src/userList');
const filter = require('./src/filter');
const map = require('./src/map');
const forEach = require('./src/forEach');
const get = require('./src/get');
const reduce = require('./src/reduce');
const go = require('./src/go');
const curryr = require('./src/curryr');
const keys  = require('./src/keys');

let userOver10 = filter(userList, user => user.age > 10);
console.log('filter:', userOver10); // [ { age: 20, name: '김민수' }, { age: 30, name: '이민지' } ]

let userName = map(userList, user => user.name);
console.log('map:', userName); // [ '홍길동', '김민수', '이민지' ]

let userNameOver10 = map(
  filter(userList, user => user.age > 10),
  user => user.name);
console.log('map + filter:', userNameOver10); // [ '김민수', '이민지' ]

forEach(userList, user => console.log(user.age)); // 10 20 30

console.log('get: ', get(userList[0], 'name')); // 홍길동
console.log('get: ', get('name')(userList[0])); // 홍길동
console.log('get: ', get(userList[4], 'name')); // undefined

userNameOver10 = map(
  filter(userList, user => user.age > 10),
  get('name'));
console.log('map + filter + get:', userNameOver10); // [ '김민수', '이민지' ]

let totalAge = reduce(map(userList, get('age')), (a, b) => a + b)
console.log('reduce + map + get: ', totalAge); // [ '김민수', '이민지' ]

go(
  userList,
  userList => filter(userList, user => user.age > 10),
  userList => map(userList, get('name')),
  console.log
)

let filterWithCurryr = curryr(filter);
let mapWithCurryr = curryr(map);
go(
  userList,
  filterWithCurryr(user => user.age > 10),
  mapWithCurryr(get('name')),
  console.log
)
go(
  null,
  filterWithCurryr(user => user.age > 10),
  mapWithCurryr(get('name')),
  console.log
)