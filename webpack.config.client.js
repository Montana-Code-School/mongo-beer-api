const path = require('path');
const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const webpack = require('webpack');

module.exports = {
    context: rootPath,
    target: 'node',
    entry: './src/client/js/App.js',
    output: {
        path: rootPath,
        filename: './src/client/js/bundle.js',
        publicPath: '/'
    },
    plugins: [
       new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('development')
       })
   ],

    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                  presets:['es2015','react'],
                }
            }
        ]
    },
    devtool: 'source-map'
};
