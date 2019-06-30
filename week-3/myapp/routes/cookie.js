let express = require("express");
let router = express.Router();

//make a route
router.get("/", (req, res)=>{
  let name = req.cookies.username;
  if(name){
    res.send("Done");
  }else{
    res.redirect("/trackName?name=inputfromtheuser");
  }
});

router.get("/hello", (req, res)=>{
  let name = req.cookies.username;
  if(name){
    res.redirect("/");
  }else{
    res.render("hello");
  }
});

router.post("/hello", (req, res)=>{
  // console.dir(req.body);
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res)=>{
  res.clearCookie("username");
  res.redirect("/hello");
});

module.exports = router;
