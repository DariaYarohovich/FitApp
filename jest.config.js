module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  setupFilesAfterEnv: ["./enzyme.js"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};
