//[10,20,30,40,50]

function reverseArray (arr) {
    const reversedArray = arr.slice().reverse()
    return reversedArray
}

const newArray = [10,20,30,40,50,]
const reversedArray = reverseArray(newArray)

console.log(reversedArray);

// output [50, 40, 30, 20, 10 ]










