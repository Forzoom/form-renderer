// config.js
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;
const alias = require('rollup-plugin-alias');
const less = require('rollup-plugin-less');
const path = require('path');

const extensions = [ '.ts', '.js', '.vue' ];
const lessOptions = {
    insert: true,
};

module.exports = exports = [
    {
        input: './src/index.js',
        output: {
            file: './dist/form-renderer.esm.js',
            format: 'esm',
        },
        // 将部分依赖作为外置内容
        external: [ 'core-js', 'vue' ],
        plugins: [
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            resolve({
                extensions,
            }),
            less(lessOptions),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },

    {
        input: './src/index.js',
        output: {
            file: './dist/form-renderer.cjs.js',
            format: 'cjs',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            resolve({
                extensions,
            }),
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            less(lessOptions),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/form-renderer.umd.js',
            name: 'FormRenderer',
            format: 'umd',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            resolve({
                extensions,
            }),
            alias({
                entries: [
                    { find: '@', replacement: path.join(__dirname, '../src') }
                ],
            }),
            less(lessOptions),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
];