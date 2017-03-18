const prod = process.argv.indexOf('-p') !== -1;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

let plugins = [
    new ExtractTextPlugin('app.min.css'),
    HtmlWebpackPluginConfig,
];
if (prod) {
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ])
}


const cssLoader = {
    loader: 'css-loader',
    options: {
        minimize: true,
        sourceMap: true,
        modules: true,
        localIdentName:'[name]__[local]___[hash:base64:5]'
    }
};
const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: function() {
            return [
                require('autoprefixer'),
                require('postcss-css-reset'),
            ]
        }
    }
};
const scssLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true,
    }
};

let cssRules = null;
if (prod) {
    cssRules =
        ExtractTextPlugin.extract(
            { fallback: 'style-loader', use: [cssLoader, postCssLoader, scssLoader]}
        );
} else {
    cssRules =
        ['style-loader', cssLoader, postCssLoader, scssLoader ]
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.min.js'
    },
    plugins: plugins,
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
                use: cssRules
            },
            {
                test: /\.(svg|png|jpg|gif|eot|ttf|woff)/,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
        ]
    }
}
