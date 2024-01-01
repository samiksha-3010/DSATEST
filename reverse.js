// let arr = [5, 7, 1, 2, 9];
// function reversearr() {
//   temp = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     temp.push(arr[i]);
//   }
//   return temp;
// }
// const answer = reversearr();
// console.log(answer, "got it");
const arr2 = [5, 7, 1, 2, 9];

function anotheraway() {
  let start = 0;
  let end = arr2.length - 1;

  while (start < end) {
    let reverASrra = arr2[start];
    arr2[start] = arr2[end];
    arr2[end] = reverASrra;

    start++;
    end--;
  }
  return arr2;
}

const secondway = anotheraway();
console.log(secondway);
