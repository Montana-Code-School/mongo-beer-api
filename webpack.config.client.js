const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './client/js/script.js',
    output: {
        path: srcPath,
        filename: './client/js/bundle.js',
        publicPath: '/'
    },
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
