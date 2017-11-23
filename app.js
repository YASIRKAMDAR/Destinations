var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');

var offers = require('./data/offers.json');

var app = express();

var router = express.Router();

/* POST Login request. */
app.post('/api/login', function(req, res, next) {
  res.send({ LoggedIn: "Y" });
});

/* GET Login request. */
app.post('/api/results', function(req, res, next) {
  var qdestination = req.query.destination || 'DXB';
  var qcategory = req.query.category || 'life';
  console.log("Here");
  try {
    console.log(_.where(offers.offpoints, {city:qdestination}));
  
    var result = { "status": offers.status,
        "offpoints": _.where(offers.offpoints, {city:qdestination})             
      };
  } catch (error) {
    console.log(error.message);    
  }
   
  res.send(offers);
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));  

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;