const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  output: {
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  plugins: [new webpack.ProgressPlugin(), new ForkTsCheckerWebpackPlugin()],
};
