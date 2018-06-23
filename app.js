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

// var proxy = require('express-http-proxy');
// var app = require('express')();

// app.use('/proxy', proxy('http://www.google.com'));
// app.use('/research', proxy('http://127.0.0.1:5000/task/phil@phil.com/123'));
//
//
// app.use('/proxy', proxy('localhost:5000', {
//     proxyReqPathResolver: function(req) {
//         return require('url').parse(req.url).path;
//     }
// }));
//
// app.use('/proxy_promise', proxy('localhost:5000', {
//     proxyReqPathResolver: function(req) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {   // simulate async
//                 // in this case I expect a request to /proxy => localhost:12345/a/different/path
//                 // var resolvedPathValue = "/a/different/path";
//                 var resolvedPathValue = "/task/phil@phil.com/123";
//                 resolve(resolvedPathValue);
//             }, 200);
//         });
//     }
// }));




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
