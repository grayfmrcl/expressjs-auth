var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use('*', (req, res, next) => {
  res.status(404).send();
});

app.use((err, req, res, next) => {
  res.status(500).send();
});

module.exports = app;
