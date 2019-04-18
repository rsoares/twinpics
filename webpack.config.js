const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "svelte-loader",
            options: {
              hotReload: true,
              emitCss: false,
              store: true
            }
          }
        ]
      }
    ]
  },
};
