
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



