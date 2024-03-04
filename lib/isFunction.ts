import { typeOfTest } from "./utils.js";

export default (v: unknown) => typeOfTest('function')(v)