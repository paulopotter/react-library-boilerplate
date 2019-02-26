import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import analyze from 'rollup-plugin-analyzer';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const limitBytes = 1e6;
const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return;
  console.log(`Bundle size exceeds ${limitBytes} bytes: ${bundleSize} bytes`);
  return process.exit(1);
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      minimize: true,
      sourceMap: true,
      modules: true,
      extensions: [ '.css', '.sass', '.scss' ]
    }),
    url(),
    svgr(),
    resolve({
      extensions: [ '.js', '.jsx' ],
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      babelrc: false,
      presets: [
        [
          "@babel/env",
          { modules: false }
        ],
        "@babel/preset-react"
      ],
      runtimeHelpers: true,
      externalHelpers: true,
      exclude: 'node_modules/**',
      plugins: [
        "@babel/plugin-proposal-class-properties",
      ]
    }),
    commonjs(),
    analyze({
      onAnalysis,
      skipFormatted: true
    })
  ]
}
