var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var express = require('express');
const logger = require('morgan');
const proxy = require('http-proxy-middleware');
var config = require('./server/config/config');

var auth = require("./server/auth/auth")(); 

var app = new (express)();
var port = 3000;

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(logger('dev'));

const apiProxy = proxy(config.apiUrl, { target: 'http://localhost:8080' });
app.use(config.apiUrl, apiProxy);

app.get('/', function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
