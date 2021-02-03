const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {

    entry: path.resolve(__dirname, "src", "components", "index.tsx"),
    target: "web",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: ''
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader'
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/public/favicon.ico',
            template: path.resolve(__dirname, "src", "public", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "./src/assets/style.css",
        }),
        new ArcGISPlugin()
    ],
    externals: {
        "configData": {
            "": ""
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}