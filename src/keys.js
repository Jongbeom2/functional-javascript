const isObject = require("./isObject");

function keys(obj){
    return isObject(obj) ? Object.keys(obj) : [];
}
module.exports = keys;