// config.js
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const extensions = [ '.ts', '.js' ];

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
            resolve({
                extensions,
            }),
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
            file: './dist/form-renderer.js',
            name: 'LargeList',
            format: 'umd',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            resolve({
                extensions,
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
];