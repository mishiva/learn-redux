var webpack = require('webpack');
var express = require('express');
var rootRouter = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var config = require('./server/config/config');
var auth = require("./server/auth/auth")(); 

var app = new (express)();
var port = 8080;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(auth.initialize());


require('./server/routes')(rootRouter, auth);
app.use(config.apiUrl, rootRouter);

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});
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
