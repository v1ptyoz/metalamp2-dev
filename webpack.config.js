const context = __dirname + '/src';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: context + '/js/index.js',
    output: {
        path: __dirname + "/dist",
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {   test: /\.js/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: '/dist',
        open: 'chrome',
        compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            minify: false,
        }),
    ]
}
