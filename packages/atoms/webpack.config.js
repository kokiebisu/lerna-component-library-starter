const path = require("path");

module.exports = {
  entry: "./lib/atoms.tsx",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "@lerna-component-library-starter/atoms",
  },
  module: {
    rules: [{ test: /\.tsx/, use: ["ts-loader"] }],
  },
  externals: [{ react: "react" }],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
