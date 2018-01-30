module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./build/build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        loader: "svelte-loader"
      }
    ]
  },
};
