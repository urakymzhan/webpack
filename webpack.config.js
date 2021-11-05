const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry
    entry: './app/index.js',
    // loaders
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          { test: /\.(js)$/, use: 'babel-loader' }
        ]
      },
    // output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
      ],
      mode: 'production'
}