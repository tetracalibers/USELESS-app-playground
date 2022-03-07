const path = require("path");

module.exports = {
    mode: "development",
    entry: [
        "./src/frontend/index.jsx",
        "./src/frontend/app/styles/scss/styles.scss",
    ],
    output: {
        filename: "index.js",
        path: path.join(__dirname, "public/js"),
    },
    plugins: [require("autoprefixer")],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(s?(a|c)ss)$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            url: false,
                        },
                    },
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|jpg|png)$/,
                use: {
                    loader: "url-loader",
                },
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
