import express from "express";
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
// Initialize the express app
const app = express();
var indexRouter = require('./routes/index');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json({ extended: false }));

// define routes

app.use('/', indexRouter);

// Set the default port to 3000, or use the PORT environment variable
const port = process.env.PORT || 8022;

app.listen(port, () => console.log(`Serving AccSrvProject API on port ${port}`));