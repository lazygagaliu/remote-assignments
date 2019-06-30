var express = require('express');
let getsum = require("./getsum");
var router = express.Router();

router.get('/', function(req, res) {
  let { number } = req.query;
  if(!number){
    res.send('Lack of Parameter');
  }else if(isNaN(number)){
    res.send("Wrong Parameter");
  }else if(number !== NaN){
    // console.log(getsum.get(number)); // it did show up, page pending
    let sum = getsum.get(number);
    res.send(String(sum)); // need to be string
  }
});

module.exports = router;
