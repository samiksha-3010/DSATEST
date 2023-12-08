function secondHighestNumber(arr){
      let largest = arr[0]
      let second  = arr[0]

      for(let i = 0 ; i > arr.length; i++){
      if(arr[i]>largest){
            second = largest
            largest=arr[i]

      }
      }
      return second
}
const number = [1,4,1,6,6,7,8,9,1,0]
const secHigestNumber = secondHighestNumber(number)
console.log(secHigestNumber)


// Higest largest Number

// callback Function Syntax

// function myFirstFunction(){
//       Displayfunction("samiksha")
// }
// function mySecondFunction(){
//       DisplayFunction("yaduvansi")
// }
// myFirstFunction();
// mySecondFunction();


// find the Shor number

let arr =  [ 12, 25, 30, 46, 78, 90 ];
let temp;
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    } return arr
}

const SortArray = sort(arr);
console.log(SortArray)

// reverse string Method

function reverseString(inputString) {
      return inputString.split('').reverse().join('');
  }
  

  let originalString = "Hello, World!";
  let reversedString = reverseString(originalString);
  console.log(reversedString);


//   reverse Number Method

function reverseArray (arr){
      const reversedArray = arr.slice().reverse()
      return reversedArray
}

const newArray = [50,40,80,10,20,10,12,21]
const reversedArray = reverseArray(newArray)

console.log(reversedArray)

// Using length property

let inputString = "Hello, World!";
let stringLength = inputString.length;
console.log(stringLength);


//  Draw star Tringle  patteren


function printTriangle(rows) {
      for (let i = 1; i <= rows; i++) {
          console.log('* '.repeat(i));
      }
  }
  
  // Example
  printTriangle(5);


//   remove Dupilicate Number

const removeDuplicate = (Array)=>{
      let newArray=[]
      for(let i = 0; i < Array.length; i++)
      if(Array[i] !== Array[i+1] )
      newArray.push(Array[i])
return newArray
}
console.log(removeDuplicate([1,2,3,4,5,6,7,8,9,9,5,6]),"")


// Sum Method 

let total = [12,34,56,79,12]

let sum = 0;

for(let i=0; i< total.length; i++){
    sum += total[i]
}
console.log(sum)

// odd Number 
// Even Number  

// var array = [23, 56, 78, 96, 34, 32, 12];
// function oddNum(odd){
//     let newOdd =[];
//     for (let i = 0; i  < odd.lenght; i++) {
//         if (odd[i] % 2 !=0){
//             console.log (odd[i]);
//             newOdd.push(odd[i]);
//         }

//     }  
//          return newOdd.length;

//     }
//     console.log (oddNum(array));





  








