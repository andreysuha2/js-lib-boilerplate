const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
    entry: {
        "bundle": path.resolve(__dirname, "./src/app.js")
    },
    output: {
        filename: "./js/[name].js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html"
        }),
        new FlowWebpackPlugin()
    ]
};