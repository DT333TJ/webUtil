import { typeOfTest } from './utils.js';

const isNumber = (v: unknown) => typeOfTest('number')(v);
export default isNumber