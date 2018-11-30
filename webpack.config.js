module.exports = {
  mode: process.env.NODE_ENV,
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
