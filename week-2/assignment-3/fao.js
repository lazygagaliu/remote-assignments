function avg(data){
  let sum = 0;
  let avg;
  let products = data.products;
  for(let i = 0; i < products.length; i++){
    sum += products[i].price;
  }
  avg = sum / products.length;
  return avg;
}

console.log(avg({
  size:3,
  products:[
    {
    name:"Product 1",
    price:100 },
    {
    name:"Product 2",
    price:700 },
    {
    name:"Product 3",
    price:250 }
  ]
}));  // show the average price of all products
