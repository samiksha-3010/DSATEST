
const Array = [1, 2, 3, 4, 5];
function Sum(numbers) {
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  

  const output = Sum(Array);
  console.log(output);
  
  // Output: 15

 
var nums = [2,3,4,1,6,]
let value = 3;

const occuredElement = (nums,value)=>{
 let newNums = nums.filetr((occured)=>{
  return occured !==value
 })
 return newNums
}
let occurance = occuredElement(nums,value);
console.log(occurance,"occurance")


const checkPalindrome = (...x)=>{
  if(x.join("") ===x.reverse().join("")){
    return true;
  }else{
    return false
  }
}
console.log(checkPalindrome(1,2,3),"check")



const position = (array) =>{
  let target = 8;
  let result =[]
  for (let i=0; i< array.length; i++)
  if(array[i] == target)
  result.push(i)
return result
}

console.log(position([5,7,7,8,8,9,9,9]),"output")



let num = 4;
function factorial(num){
  if(num < 0){
    return -1

  }
  if (num< 0){
    return -1
  }
  if (num == 0){
    return 1;

  }else{
    return num *factorial(num -1)
  }
}
console.log(factorial(num));

// 13//

let nums = [5, 7, 7, 8, 8, 10];

target = 8;
output = [3, 4];

function arrayindex(nums) {
  let indexArray = [];

  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      flag = true;
      indexArray.push(i);
    }
  }

  if (!flag) {
    indexArray.push(-1);
  }
  return indexArray;
}

console.log(arrayindex(nums));




