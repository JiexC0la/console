const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin.js')

let config

config = merge(baseConfig, {
    target: 'node',
    entry: path.join(__dirname, '../client/server-entry.js'),
    module: {
        rules: [{
            test: /\.styl(us)?$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader

                },
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    output: {
        libraryTarget: 'commonjs2',
        filename: 'server-entry.js',
        path: path.join(__dirname, '../server-build')
    },
    externals: Object.keys(require('../package.json').dependencies),
    devtool: '#souce-map',
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contentHash:8].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        }),
        new VueServerPlugin()
    ]
})

module.exports = config