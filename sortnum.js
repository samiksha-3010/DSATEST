    // Use the sort method to sort the array in ascending order


    //  const numbersArray = [3, 1, 5, 2, 4];
    // function shortNumber(numbers) {

    //     const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      
    //     return sortedNumbers;
    //   }
       
    //   const sortedArray = shortNumber(numbersArray);
    //   console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

    // const numbersarr = [90,30,25,46,78,12]

    //   function shortNum(numbers) {

    //     const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      
    //     return sortedNumbers;
    //   }

      // const sortedArray = shortNum(numbersarr);
      // console.log(sortedArray); 
      
      // Output: [ 12, 25, 30, 46, 78, 90 ]


      let arr = [3, 6, 8, 9, 1];
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





     


   