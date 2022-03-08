const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        ticket: './assets/js/tickets.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].main.bundle.js"
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }), new BundleAnalyzerPlugin({
        analyzerMode: 'static',
    })],
    mode: 'development',
    module: {
        rules: [
            {
                test: RegExp(/\.jpg$/i),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace('../', '/assets/')
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    }
};