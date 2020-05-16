// var http = require("http");  
// http.createServer(function (request, response) {  
//  // Send the HTTP header   
//    // HTTP Status: 200 : OK  
//    // Content Type: text/plain  
//    response.writeHead(200, {'Content-Type': 'text/plain'});  
//    // Send the response body as "Hello World"  
//    response.end('Start of Node\n');  
// }).listen(8081);  
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8081/');  


// const name = 'John';  
// console.warn(`Don't mess with me ${name}! Don't mess with me!`);   


// var express=require('express');
// var app=express();

// app.get('/',function(req,res)
// {
// res.send('Hello World!');
// });

// app.get('/node', function(req,res){
//   res.send("On Node Page")
// })

// app.get('/express', function(req,res){
//   res.send("On Express Page")
// })

// var server=app.listen(3000,function() {});

// var http = require('http');
// var url = require('url');

// var server = http.createServer(function(req, res) {
// var page = url.parse(req.url).pathname;
// console.log(page);
// res.writeHead(200, {"Content-Type": "text/plain"});
// res.write('Well Hello');
// res.end();
// });
// server.listen(3000);


var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('firstname' in params && 'lastname' in params) {
        res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
    }
    else {
        res.write('You do have a first name and a last name, don\'t you?');
    }
    res.end();
});
server.listen(3000);