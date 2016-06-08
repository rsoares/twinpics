module.exports = {
  entry: "./app/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
