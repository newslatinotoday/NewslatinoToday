const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.(css|scss)$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }, //css only files
        {
          test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Popper: 'popper.js',
      jQuery: 'jquery',
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    }),
    new HtmlWebpackPlugin({
        favicon:img src='https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/83194744_599465614209879_3208406626709012480_n.png?_nc_cat=108&_nc_oc=AQkxY8VZg0_V1rl-zuezge-EyAAw2eXJXYhYt3yiZfZvyzfZ3Ut1HwVIYCSfgdwKHrg2o-GgnuYrCWyjB-yACm17&_nc_ht=scontent.fmia1-1.fna&oh=1fe7f5d32987f7527636ba8a8931d86d&oe=5ED9BC60.ico',
        template: 'template.html'
    })
  ]
};
