var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server' });
});

router.get('/myName', (req, res)=>{
  let username = req.cookies.name;
  if(username){
    res.send(`Your name is ${username}! Done!`);
  }else{
    res.redirect('/trackName?name=使用者的輸入');
  }
});

router.get('/trackName?', (req, res)=>{
  let username = req.cookies.name;
  if(username){
    res.redirect('/myName');
  }else{
    res.render('cookie', { title: 'Server' });
  }
});

router.post('/trackName?', (req, res)=>{
  res.cookie("name", req.body.name);
  console.log("Username is " + req.body.name);
  res.redirect('/myName');
});

module.exports = router;
