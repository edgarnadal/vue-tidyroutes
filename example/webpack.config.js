const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {

    entry: './example.js',

    output: {
        path: './example',
        filename: 'example-build.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
        ]
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
            'vue-router': 'vue-router/dist/vue-router.common.js',
            'vue-tidyroutes': path.join(__dirname, '..', 'dist/tidyroutes.js')
        }
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]

}
