var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var express = require('express');
var rootRouter = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// var config = require('./config/config');
var auth = require("./server/auth/auth")(); 

var app = new (express)();
var port = 3000;

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(auth.initialize());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});


require('./server/routes')(rootRouter, auth);
app.use('/api/v1', rootRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  let error = err ? err : new Error('Unknown Server Error!');
  return res.status( error.status || 500 ).json({
    success: false,
    error: error.message
  })
  // next(error);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
