const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new FaviconsWebpackPlugin('./src/assets/images/favicon.png'),
    new ESLintPlugin({
      failOnError: false,
      failOnWarning: false,
      emitWarning: false,
      emitError: false,
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/docs/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    watchFiles: ['src/*.html'],
    static: path.resolve(__dirname, './'),
    hot: true,
    open: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: '/node_modules/',
  },
};
