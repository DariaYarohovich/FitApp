const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        rules: [stylesProcessor(), babelProcessor(mode)],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
      resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
      },
    },
    configFile(mode)
  );
};
