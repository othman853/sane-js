'use strict';

var http = require('http');
var express = require('express');
var io = require('socket.io');
var browserify = require('browserify-middleware');
var babelify = require('babelify');

var app = express();
var server = http.createServer(app);
var socketServer = io(server);

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/', (request, response) => response.render('home'));

app.get('/babelified/js/home.js', browserify(`${__dirname}/public/js/home.js`, {

    extensions: ['.js'],

    transform: [babelify.configure({
        presets: ['es2015']
    })]

}));

server.listen(3000, () => console.log('Up on 3000'));

socketServer.on('connection', (client) => {
  console.log('Server connected to the client.');
});
