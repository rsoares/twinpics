module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./build/build.js"
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
            loader: "svelte-hot-loader"
          },
          {
            loader: "svelte-loader",
            query: {
              emitCss: false,
              store: true
            }
          }
        ]
      }
    ]
  },
};
