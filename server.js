'use strict';

var http = require('http');
var express = require('express');
var io = require('socket.io');

var server = http.createServer();
var app = express(server);
var socketServer = io(server);

app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Up on 3000'));

socketServer.on('connection', (client) => {
  console.log('Server connected: ', client);
});

app.get('/', (request, response) => response.render('home'));
