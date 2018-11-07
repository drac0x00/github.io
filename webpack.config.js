const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CleanWebpackPlugin = require ('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new CleanWebpackPlugin (['dist']),
    new HtmlWebpackPlugin ({
      title: 'My App',
      filename: 'index.html',
      template: 'src/html/home.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve (__dirname, 'dist'),
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
