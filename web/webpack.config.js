const HTMLWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    devServer:{
        open: true,
        port: 5000,
        historyApiFallback: true,
        inline: true
    },
    entry: ["@babel/polyfill", "./src/root.jsx"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HTMLWebPackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
}