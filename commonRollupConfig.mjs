import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  plugins: [resolve(), babel({extensions: ['js', 'ts'], babelHelpers: 'inline'}), typescript()]
}