const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
// const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOP = NODE_ENV == 'development';

let config = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        IS_DEVELOP: JSON.stringify(IS_DEVELOP)
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new ExtractTextPlugin('styles.[contenthash].css', {
      allChunks: true,
      disable: IS_DEVELOP,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
        loaders: ['react-hot-loader/webpack', 'babel-loader?cacheDirectory'],
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss!sass-loader?sourceMap'),
      },
      {
        test: /\.(png|jpe?g|ico)$/,
        loader: 'url?name=images/[name].[hash:6].[ext]&limit=4096',
      },
      {
        test: /images\/.*?\.(svg)$/,
        loader: 'url?name=images/[name].[hash:6].[ext]&limit=4096',
      },
      {
        test: /\/bootstrap\/dist\/js\/bootstrap\.js/,
        loader: 'imports?jQuery=jquery',
      },

    ]
  },
  postcss: function () {
    return [autoprefixer({browsers: ['last 2 versions']})]
  },
  sassLoader: {
    outputStyle: IS_DEVELOP ? 'expanded' : 'compressed',
    sourceMap: IS_DEVELOP
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  stats: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: true,
    modules: true,
    reasons: true,
    children: true,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  },
}

let plugins = [];
if(IS_DEVELOP) {
  Object.assign(config, {
    devtool: 'cheap-module-eval-source-map', //source-map
    debug: true,
    cache: true,
    watchOptions: {timeout: 100}
  })
  config.entry.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client?http://localhost:3000')
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  plugins.push(
    new webpack.NoErrorsPlugin(),
    new CleanPlugin([ 'build' ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        drop_debugger: true,
        unused: true,
        warnings: false,
        evaluate: true,
        unsafe: true
      },
      sourceMap: false
    })
  )
}
Array.prototype.unshift.apply(config.plugins, plugins);
console.log(config)

module.exports = config;
