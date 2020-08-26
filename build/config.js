// config.js
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const alias = require('rollup-plugin-alias');
const vue = require('rollup-plugin-vue');
const path = require('path');

const extensions = [ '.ts', '.js', '.vue' ];

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
            vue(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
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
            vue(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
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
            vue(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
];