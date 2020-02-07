"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const express = require("express");
const path = require("path");
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
var app = express();
var config = require('./config')();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/users', user_1.default);
app.use(config.port, function () {
    console.log('Express server listening on port ' + config.port);
});
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous �tes � l\'accueil, que puis-je pour vous ?');
});
app.get('/sous-sol', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous �tes dans la cave � vins, ces bouteilles sont � moi !');
});
app.get('/etage/1/chambre', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('H� ho, c\'est priv� ici !');
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map