var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        demo: './src/main/webapp/js/demo.js'
    },
    output: {
        path: path.resolve('./src/main/webapp/dist'),
        filename: 'demo.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};