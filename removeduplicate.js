// [1, 2, 2, 3, 4, 4, 5]

// function removeDuplicate(arr) {
//     const uniqueArray = new Array(arr);
//       const NewArray = [...uniqueArray];
  
//     return NewArray;
//   }
  

//   const originalArray = [1, 2, 2, 3, 4, 4, 5];
//   const newArray = removeDuplicate(originalArray);
//   console.log(newArray); 
  
  // Output: [1, 2, 3, 4, 5]


  
  
  const removeDuplicate =(array)=>{
    let newArray=[]
    for (let i=0;i < array.length; i++)
    if(array[i] !== array[i+1])
    newArray.push(array[i])
return newArray
} 
console.log(removeDuplicate([1,2,3,2,4]),"");


































  