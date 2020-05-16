
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

// import express from 'express';
// var app = express();
// var server = app.listen(8080);
// var io = require('socket.io').listen(server);
    
// var app = require("express")();
// var http = require( "http" ).createServer( app );
// var io = require( "socket.io" )( http );
// http.listen(8080, "127.0.0.1")


// io.on('connection',function(socket){  
//     console.log("A user is connected");
// });



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/chat.html");
});

io.on("connection", function(socket) {

    socket.on("user_join", function(data) {
        this.name = data;
        socket.broadcast.emit("user_join", data);
        console.log(data + " is here");
    });

    socket.on("chat_message", function(data) {
        data.name = this.name;
        
        socket.broadcast.emit("chat_message", data);
        console.log(data.name + " said: " + data);
        console.log(data)
    });

    socket.on("disconnect", function(data) {
        socket.broadcast.emit("user_leave", this.name);
    });
});


http.listen(port, function () {
    console.log("Listening on *:" + port);
});

