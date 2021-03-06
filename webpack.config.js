const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const configFile = (mode) => require(`./configs/webpack.${mode}`);

const stylesProcessor = require("./configs/presets/styles");
const babelProcessor = require("./configs/presets/babel");

module.exports = ({ mode } = { mode: production }) => {
  return webpackMerge(
    {
      entry: "./src/index.ts",
      output: {
        path: path.resolve(__dirname, "build"),
      },
      module: {
        rules: [
          stylesProcessor(),
          babelProcessor(mode),
          {
            test: /\.(jpg|jpeg|png)$/,
            use: ["file-loader"],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
        new webpack.WatchIgnorePlugin([/(\.css\.d\.ts)$/])
      ],
      resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".jpeg", ".jpg"],
        alias: {
          mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js",
        },
      },
    },
    configFile(mode)
  );
};
