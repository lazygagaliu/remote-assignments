function ajax(src, callback){
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (){

    if(xhr.readyState === 4 && xhr.status === 200){
      let products = JSON.parse(xhr.responseText);
      console.log(typeof products, products);
      callback(products);
      // function(response){ render(response);
      // }
    }
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data){
  console.log(data);
  let newTable = document.createElement("table"); 
  for(let i = data.length-1; i > -1; i--){
    var newRow = newTable.insertRow(data[i]);
    newRow.insertCell(0).innerHTML = data[i].name;
    newRow.insertCell(1).innerHTML = data[i].price;
    newRow.insertCell(2).innerHTML = data[i].description;
  }
    console.log(newRow);
  let newDiv = document.getElementById("newDiv");
  newDiv.appendChild(newTable);
}
// your code here.
//  document.createElement()  and appendChild()  methods are preferred. }
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ render(response);
});  // you should get product information in JSON format and render data in the page
