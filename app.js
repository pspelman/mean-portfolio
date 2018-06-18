var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
// require('./models/MovieModel');

var portfolioRouter = require('./routes/portfolio');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grayport');


var app = express();
//angular route
app.use(express.static(path.join(__dirname, '/ang-grayport/dist/ang-grayport')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', portfolioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(`In the app.use function`,);
    // render the error page
    res.status(err.status || 500);

    //check the Angular redirect
    res.redirect('/');
    // res.json({'message': 'error in navigation', 'error': err.status})
});


app.listen(8000, function (req, res) {
    console.log(`listening on 8000...`,);
});

module.exports = app;
module.exports.mongoose = mongoose;
