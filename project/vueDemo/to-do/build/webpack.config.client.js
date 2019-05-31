const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
/**
 * extract-text-webpack-plugin目前版本不支持webpack4
 * 1、使用extract-text-webpack-plugin最新beta版本，但此版本不支持生成hash
 * 2、使用mini-css-extract-plugin
 */
// const ExtractPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'dist'),
    overlay: {
        errors: true
    },
    // open: true, // 每次启动DevServer自动打开浏览器
    hot: true,
    hotOnly:true,
    // 解决mode: history 页面刷新404问题
    historyApiFallback: {
        index: '/public/index.html'
    }
}

const defaultPlugins = [
    new VueLoaderPlugin(),
    new HTMLPlugin({
        title: 'JiexC0la',
        template: path.join(__dirname, 'template.html')
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    })
]

let config

if (isDev) {
    config = merge(baseConfig, {
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
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
            // new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config = merge(baseConfig, {
        output: {
            filename: '[name].[chunkhash:8].js',
            path: path.join(__dirname, '../dist')
        },
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
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: 'style.[contentHash:8].css'
            })
            /**
             * CommonsChunkPlugin已被webpack4弃用，使用splitChunks代替
             */
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor'
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'runtime'
            // })
        ]),
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vender',
                        chunks: 'all'
                    }
                }
            },
            runtimeChunk: true
        }
    })
}
module.exports = config