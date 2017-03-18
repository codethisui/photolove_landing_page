var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
// new webpack.optimize.DedupePlugin(),
// new webpack.optimize.OccurenceOrderPlugin(),
// new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.min.js'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        HtmlWebpackPluginConfig
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['stage-3', 'latest', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    { fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true,
                            modules: true,
                            localIdentName:'[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    'sass-loader',
                ]
            })
        },
        {
            test: /\.(svg|png|jpg|gif|eot|ttf|woff)/,
            loader: 'file-loader',
            exclude: /node_modules/,
        },
    ]
}
}
