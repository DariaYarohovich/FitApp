module.exports = () => ({
  test: /.css$/i,
  use: [
    "style-loader",
    {
      loader: "typings-for-css-modules-loader",
      options: {
        importLoaders: 1,
        modules: true,
        camelCase: true,
        namedExport: true,
      },
    },
    "postcss-loader",
  ],
});
