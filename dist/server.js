var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
var path = require('path');
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname));
app.use(sslRedirect());

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);