const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPluin = require("mini-css-extract-plugin");
// const PurgeCSSPlugin = require("purgecss-webpack-plugin");
// const glob = require("glob");
// const path = require("path");

const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPluin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPluin({
      filename: "css/[name].css",
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
    //     nodir: true,
    //   }),
    // }),
  ],
  //   devtool: "none",
};

module.exports = merge(baseConfig, config);
