import { rollup } from 'rollup';
import npm from 'rollup-plugin-npm';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    json(),
    babel(),
    npm({ jsnext: true, main: true }),
    commonjs()
  ],
  dest: 'bundle.js' // equivalent to --output
}