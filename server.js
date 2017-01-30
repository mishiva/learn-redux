var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var rootRouter = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = new (express)();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: 'http://localhost:3000'}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 500)
  .send(error || new Error('500 Server Error!'))
});

require('./server/routes')(rootRouter);
app.use('/api/v1', rootRouter);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
