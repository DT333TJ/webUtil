import isFunction from "./lib/isFunction.js"
import isNumber from "./lib/isNumber.js"
import isObject from "./lib/isObject.js"
import isPlainObject from "./lib/isPlainObject.js"
import isString from "./lib/isString.js"
import isBoolean from "./lib/isBoolean.js"
import isDate from "./lib/isDate.js";
import toCamelCase from "./lib/toCamelCase.js"
import isAbsoluteURL from "./lib/isAbsoluteURL.js"
import combineURLs from "./lib/combineURLS.js"

console.log(toCamelCase(123))
console.log(toCamelCase('my-abc-def'))

'https://www.runoob.com/'.replace(/\/\//, function(m, p1, p2) {
  console.log('p1',m, p1, p2)
  return p1 + p2
})


const r = 'https://www.runoob.com/'.replace(/\/?\/$/, '')
console.log(r)

export {
  isBoolean,
  isNumber,
  isString,
  isDate,
  isObject,
  isPlainObject,
  isFunction,
  isAbsoluteURL,
  combineURLs
}