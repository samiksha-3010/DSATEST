
let arr = "pooja vishwakarma"
function reverseStr (){
      temp = ''
      for(var i = arr.length-1 ; i>=0;i--){
            temp += arr[i]
      }
      return temp
}
const ans = reverseStr ()
console.log(ans);

