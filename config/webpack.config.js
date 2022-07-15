const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
}
