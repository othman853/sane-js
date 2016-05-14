'use strict';

var http = require('http');
var express = require('express');
var io = require('socket.io');

var app = express();
var server = http.createServer(app);
var socketServer = io(server);

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/', (request, response) => response.render('home'));

server.listen(3000, () => console.log('Up on 3000'));

socketServer.on('connection', (client) => {
  console.log('Server connected to the client.');
});
