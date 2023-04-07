const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const DeleteCommentPlugin = require("../plugin/DeleteCommentPlugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        generator: {
          filename: "assets/[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          // {
          //   loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env", "@babel/preset-react"],
          //     cacheDirectory: true, // 添加缓存
          //   },
          // },
          {
            loader: "loader1",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "ts-loader",
          "loader2",
          "loader3",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ProgressPlugin(),
    new DeleteCommentPlugin({
      target: ".js",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", "..."],
  },
  resolveLoader: {
    alias: {
      loader1: path.join(__dirname, "../loader/loader1.js"),
      loader2: path.join(__dirname, "../loader/loader2.js"),
      loader3: path.join(__dirname, "../loader/loader3.js"),
    },
    // modules: ["node_modules", path.join(__dirname, "../loader")],
  },
  // externals: {}
};
