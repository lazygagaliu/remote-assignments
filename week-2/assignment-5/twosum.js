function twoSum(nums, target){
  let sum;
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j < nums.length; j++){
      sum = nums[i] + nums[j];
      if(sum === target && i !== j && i < j){
        console.log(i, j);
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);
twoSum([8, 18, 21, 6, 92, 37], 27)
