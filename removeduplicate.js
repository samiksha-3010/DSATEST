// let nums = [1, 2, 3, 1];
// function containsDuplicate(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// let hasDuplicates = containsDuplicate(nums);
// console.log(hasDuplicates); 

// let nums = [1,3, 2, 3,2 ]; //[1,1,2,3]


// function containsDuplicate(nums) {

//     // nums.sort((a, b) => a - b);
//     for (let i = 0; i <= nums.length - 1; i++) {

//         if (nums[i] === nums[i + 1]) {
//             return true;
//         }
//     }
//     return false;

// }



let array =["lucky","scale", "happy", "strength", "peace", "happy", "happy","kuhoo"]

function removeDuplicate(arr){
    let unique = []
    arr.forEach((element)=>{
        if(!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}

console.log(removeDuplicate(array))

    var arr = [12,15,10,72,45,69,32]

    function deleteArr(arr){
        var position = 6
        for (let i = position; i < arr.length - 1; i++){
            arr [i] = arr[i+1]
        }
            arr.length = arr.length-1;
            console.log(arr)
        }
        deleteArr(arr) 






  
  


































  