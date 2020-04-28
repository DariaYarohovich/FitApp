module.exports = (mode) => {
  const presetEnvConfig =
    mode === "production"
      ? {
          targets: "> 0.25%, not dead",
        }
      : {
          targets: {
            chrome: "60",
            ie: "11",
          },
        };

  return {
    test: /\.tsx?$/,
    exclude: "/node_modules/",
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-react",
          "@babel/preset-typescript",
          ["@babel/preset-env", presetEnvConfig],
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread",
        ],
      },
    },
  };
};
