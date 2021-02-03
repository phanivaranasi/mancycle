const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8067,
        historyApiFallback: true
    }
})