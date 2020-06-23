var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { 
    title: 'Todo Simple App',
    list_items: items
  });
  
});

var items = []
router.post('/post', function(req, res){

  const task = req.body.task;
  if(task == ''){
    res.render('index',{
      title: 'Todo Simple App',
      alert: "Please enter an item ):",
      list_items: items
    })
    
  } else{
    items[items.length] = task
    console.log(items)
    res.render('index',{
      title: 'Todo Simple App',
      list_items: items
    })
  }
})


router.get('/post/delete/:id', function(req,res){
  //console.log(req.body)
  console.log(req.params.id)
  items.splice(req.params.id, 1)
  console.log(items)
  res.redirect('/')
})

router.get('/post/deleteAll/', function(req, res){
  items.length = 0
  console.log(items.length)
  res.redirect('/')
})

router.use(function(req, res, next){
  //res.redirect('/');
  res.render('404',{
    title: 'Page not found'
  })
})


module.exports = router;
