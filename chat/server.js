//import serve from "events";

// const serve = require("events").EventEmitter
// const sv = new serve()

// sv.on('push', function(){
//     console.log("excuted")
// })

// sv.emit('push')

const http = require("http")
const fs = require("fs")

const server = http.createServer()

// // server.on("connection", function(){
// //     console.log("connected")
// // })

server.on('request', function(req, res){
    //res.writeHead(200)
    //res.setHeader('Content-Type', 'text/html');
    //res.end("<p> Hello World </p>")
    fs.readFile(__dirname + "/test.html", function(err, file){
       (err) ? console.log(err) : null;

        res.writeHead(200,{'Content-Type': 'text/html'})
        
        res.end(file)
        
    })
    
    fs.readFile(__dirname + "/testfield.js", function(err, file){
        //if (err) console.log(err);
        (err) ? console.log(err) : null;
        res.writeHead(200,{'Content-Type': 'application/javascript'})
        
        res.end(file)
        
    })

    // if (request.url.match(/.js$|.html$|.css$/)) {
    //     return response.end(fs.readFileSync(__dirname + '/..' +   request.url));
    //   }

    console.log(req.url)
    console.log(req.method)
}).listen(3000)


  // const http = require("http")
  // const server = http.createServer()
  // const qr = require("qrcode")

  // server.on("request", function(req, res){
  //   // const generateQR = async text => {
  //   //   try {
  //   //     console.log(await qr.toDataURL(text))
  //   //   } catch (err) {
  //   //     console.error(err)
  //   //   }
  //   // }

  //   // const generateQR = async text => {
  //   //   try {
  //   //     console.log(await qr.toString(text, {type: 'img'}))
  //   //   } catch (err) {
  //   //     console.error(err)
  //   //   }
  //   // }
    
  //   qr.toString('house',{type:'svg'}, function (err, 
  //     code) {
  //      console.log(code) 
  //      res.writeHead(200,{'Content-Type': 'text/xml'})
  //      //res.end("<img src='" + code + ".png"+"' >")
  //      res.end(code)
  //     })
       
  // }).listen(3000)

 
  
  

  // const qr = require("qrcode-terminal")
  // //console.log(qr.toString("text", {type: 'terminal'}))
  // qr.generate('shoe!');
