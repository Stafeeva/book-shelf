const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/App.jsx',
  devServer: {
    contentBase: './public'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: "sass-loader",
          options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
          }
        }],
      },
    ]
  }
};
