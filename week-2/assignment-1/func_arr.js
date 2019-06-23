function max(...numbers){
  let maxNum = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    if(maxNum < numbers[i]){
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

let ans1 = max(1, 2, 4, 5);  // result to 5
let ans2 = max(5, 2, 7, 1, 6);  // result to 7
let ans3 = max(-6, 5, 13, 0, -98, 100, -54);

console.log(ans1);
console.log(ans2);
console.log(ans3);

// function sortNum(...numbers){
//   let sortedNum = numbers.sort();
//   console.log(sortedNum);
//   let last = sortedNum.pop();
//   console.log(last);
// }
//
//
// sortNum(1, 2, 4, 5);
// sortNum(5, 2, 7, 1, 6);
// sortNum(-6, 5, 13, 0, -98, 100, -54); // not working
