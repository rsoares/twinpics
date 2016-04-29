module.exports = {
  entry: "./app/app.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
