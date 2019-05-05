var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
      filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    watchContentBase: true,
    compress: true,
    port: 9000
  }
};