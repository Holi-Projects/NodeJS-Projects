const http = require("http")
const server = http.createServer()
const qr = require("qrcode")

server.on("request", function(req, res){

    qr.toString('hope',{type:'svg'}, function (err, 
        code) {
         console.log(code) 
         res.writeHead(200,{'Content-Type': 'text/xml'})
         //res.end("<img src='" + code + ".png"+"' >")
         res.end(code)
        })

}).listen(3000)

// const express = require("express")
// const qr = require("qrcode")

// const EventEmitter = require("events").EventEmitter
// var app=express();
// var gen = new EventEmitter()



// app.get("/", function(req, res){
    
//      res.sendFile(__dirname + "/index.html")
// })


// gen.on("connection", function(btn){
//     btn.on('click', function(data){
//         console.log(data)
//     })
// })

//   var server=app.listen(3000,function() {});