// var target = 15;
// var array = [12,3,41,3,7,8,9,1,12]

// function answer(){
//       for(var i = 0 ; i < array.length-1 ; i++){
//             // console.log(array[i],"log");
//             if (array[i]==target){
//                   return true
//             }
//             return false
//       }
// }
// const here = answer()
// console.log(here ,"got it");

var target = 15;
var array = [12,3,41,3,7,8,9,1,12]
function answer() {
      for(var i = 0 ; i < array.length ; i++){
            for( var j = i +1 ; j < array.length ; j++){
                  if(array[i]+array[j]==target){
                        return array[i]+array[j]
                  }
            }
      }
      
}
const here = answer()
console.log(here ,"got it")


