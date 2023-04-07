const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const path = require("path");

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "../public"),
    port: "8080",
    compress: true,
    open: true,
  },
};

module.exports = merge(baseConfig, config);
