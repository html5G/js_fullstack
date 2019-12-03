const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //入口
    entry:'./src/index.js',
    //出口
    output: {
        path:path.resolve(_dirname,'dist'),
        filename:'[name].js'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.resolve(_dirname,'src')
                ],
                use: 'babel-loader'
            },
            {
                text: /\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions:[".js"],
        modules: [
            "node_modules",
            path.resolve(_dirname,'src')
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
}