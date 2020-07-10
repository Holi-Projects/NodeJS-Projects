const app = require("express")()
const port = process.env.port || 3000
const bodyparser = require('body-parser') 
const qr = require("qrcode")

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post('/genQR', function(req,res){
  console.log(req.body.text)
  const qrText = req.body.text
  qr.toString(qrText,{type:'svg'}, function (err, 
    code) {
     //console.log(code) 
     res.writeHead(200,{'Content-Type': 'text/xml'})
     //res.end("<img src='" + code + ".png"+"' >")
     res.end(code)
    })
    

})

app.listen(port, function(error){
  if (error) throw error 
  console.log("Server created Successfully on PORT", port) 
})

