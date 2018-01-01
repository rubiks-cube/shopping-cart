var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');

var passport=require('passport');
var connectflash=require('connect-flash');
var session=require('express-session');
var validator=require('express-validator');
var mongostore=require('connect-mongo')(session);

var routes = require('./routes/index');
var userRoutes = require('./routes/user');
var app = express();

mongoose.connect('mongodb://abhi3:abcde@ds137957.mlab.com:37957/shopabhi',(err)=>{

if(err){throw err;}
else{console.log('shop');}
});

mongoose.Promise = global.Promise;
var y=require('./config/passport');
var expressHbs=require('express-handlebars');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
 
app.use(session({secret:'rubikscube',resave:false,saveUnititalised:false,
store: new mongostore({mongooseConnection:mongoose.connection}),
cookie:{maxAge:18*60*1000}

}));


app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());


app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session=req.session;
    next();
});

app.use('/user', userRoutes);
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));
//order of routes


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

