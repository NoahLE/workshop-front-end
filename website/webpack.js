const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ternary operation = (boolean check ? if true, do this : else, do this)
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  context: path.join(__dirname, 'src'),
  entry: {
    app: path.join(__dirname, 'src/js/app.js')
  },
  output: {
    filename: 'js/app.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.css', '.json', '.vue', '.jpg', '.png'],
    modules: [
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devtool: 'eval-source-map',
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    noInfo: false,
    open: false,
    port: 3000,
    public: 'localhost:3000'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          hot: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ?
            'vue-style-loader' :
            MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          objectAssign: 'Object.assign'
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sandbox application',
      template: 'html/index.html',
      filename: 'index.html',
      minify: true,
      appEntryID: 'app',
    }),
    new VueLoaderPlugin({
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};