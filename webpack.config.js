const HtmlWebpackPlugin =require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    context: __dirname,
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader' , 'postcss-loader']
            },
            {
                test: /\.(png|j?g|svg|gif|jpg)?$/,
                exclude: /node_modules/,
                use: 'file-loader?name=./assets/[name].[ext]'
            }
            
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        })
    ]
}