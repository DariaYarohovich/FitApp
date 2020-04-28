const Terser = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "[hash].bundle.js",
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new Terser({
        cache: true,
        parallel: true,
      }),
    ],
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    occurrenceOrder: true,
    providedExports: true,
    usedExports: true,
  },
};
