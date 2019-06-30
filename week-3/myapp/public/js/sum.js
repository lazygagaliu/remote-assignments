function getSum(){
  let xhr = new XMLHttpRequest();
  let inputNum = document.getElementById("number").value;
  // console.log(inputNum);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      document.getElementById("answer").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "http://localhost:3000/getData?number=" + inputNum);
  xhr.send();
}
