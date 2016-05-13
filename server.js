'use strict';

var http = require('http');
var express = require('express');
var io = require('socket.io');
var ioClient = require('socket.io-client');

var server = http.createServer();
var app = express(server);
var socketServer = io(server);

app.listen(3000, () => console.log('Up on 3000'));

socketServer.on('connection', (client) => {

  console.log('Client connected: ', client);
});

app.get('/', (request, response) => {

  console.log('Io Client', ioClient);

  response.send('Oi');
});

app.get('/js/socket.js');
