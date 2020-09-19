const express = require('express');
const http = require('http');
const socket = require('socket.io');

var app = express();
var server = app.listen(1337);
app.use(express.static('public'));

// var value = {
// 	Left1 : "Player1",
// 	Left2 : "Player2",
// 	Left3 : "Player3",
// 	Left4 : "Player4",
// 	Left5 : "Player5",
// 	Right1 : "Player6",
// 	Right2 : "Player7",
// 	Right3 : "Player8",
// 	Right4 : "Player9",
// 	Right5 : "Player0"
// }

//app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.get('/', (req, res) => {
    //res.sendFile('viewer.html');
    res.sendFile(__dirname + '/public/viewer.html');
})

app.get('/admin', (req, res) => {
    //res.sendFile('admin.html');
    res.sendFile(__dirname + '/public/admin.html');
})

app.get('*', function (request, response) {
  	response.send('404!');
})

// -------------------------------------------------------------------------------------------
// Socket.io
var io = socket(server);

io.of('/').on('connection', function(socket) {
  console.log("(Viewer) New connection:", socket.id);
  //socket.emit('dataValue', value);
  socket.on('disconnect', function(){
    console.log("(Viewer) Disconnected:", socket.id);
  })
})

io.of('/admin').on('connection', function(socket) {
  console.log("(Admin) New connection:", socket.id);

  socket.on('adminUpdate', function(data){
    io.of('/').emit('adminVal', data);
    value = data;
  })

  socket.on('disconnect', function(){
    console.log("(Admin) Disconnected:", socket.id);
  })
})




console.log("Server up and running")