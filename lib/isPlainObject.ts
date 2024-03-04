import { kindOf } from "./utils.js"

export default (v: unknown) => {
  if (kindOf(v) !== 'object') return false
  const prototype = Object.getPrototypeOf(v)
  return( prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in (v as Object)) && !(Symbol.iterator in (v as Object))
}