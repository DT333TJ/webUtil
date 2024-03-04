import { typeOfTest } from './utils.js';

const isString = (v: unknown) => typeOfTest('string')(v);
export default isString