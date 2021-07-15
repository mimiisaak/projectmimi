const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const pets = require("./model/Petsmodel");
const mongoose = require('mongoose');

//conect to the mongoDb
var uri = "mongodb://localhost:27017/petshop";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Distribution to the right router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;// set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500); // render the error page
  res.render('error');
});

module.exports = app;
const port=3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
