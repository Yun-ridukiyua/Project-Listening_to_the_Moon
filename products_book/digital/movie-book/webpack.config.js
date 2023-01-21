const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
module.exports = {
    mode: "development",
    context: src,
    entry: "./index.tsx", //ビルドするファイル
    output: {
        path: dist, //ビルドしたファイルを吐き出す場所
        filename: "index.js", //ビルドした後のファイル名
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|mp4)$/i,
                generator: {
                    filename: `./assets/[name].[contenthash][ext]`,
                },
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    devServer: {
        hot: true,
    },
};
