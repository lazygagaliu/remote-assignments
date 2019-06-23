let hiddenMenu = document.querySelector(".hidden-menu");
let showMenu = document.querySelector(".menu");
let welcome = document.querySelector(".welcome");
let closeButton = document.getElementById("closeButton");
let showButton = document.querySelector(".show-button");
let hiddenContent = document.querySelector(".hidden-content");

showMenu.addEventListener("click", ()=>{
  hiddenMenu.style.display = "block";
});

closeButton.addEventListener("click", ()=>{
  hiddenMenu.style.display = "none";
});

welcome.addEventListener("click", ()=>{
  welcome.innerHTML = "Have a Good Time!<br>Enjoy Your Life!!<br>Just do it!!!";
});

showButton.addEventListener("click",()=>{
  hiddenContent.style.display = "flex";
});
