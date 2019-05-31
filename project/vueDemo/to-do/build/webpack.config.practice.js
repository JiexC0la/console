const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    // open: true, // 每次启动DevServer自动打开浏览器
    hot: true
}

const defaultPlugins = [
    new VueLoaderPlugin(),
    new HTMLPlugin({
        title: 'JiexC0la',
        template: path.join(__dirname, '../practice/template.html')
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    })
]

let config

config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    module: {
        rules: [{
            test: /\.styl(us)?$/,
            oneOf: [{
                resourceQuery: /module/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
            },
            {
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
            }]
        }]
    },
    devtool: '#cheap-moudle-eval-souce-map',
    devServer: devServer,
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config