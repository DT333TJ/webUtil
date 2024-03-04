import { kindOfTest } from "./utils.js";

export default (v: unknown) => kindOfTest('Date')(v)