// Webpack 4 default configuration

// const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "./dist/bundle.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
