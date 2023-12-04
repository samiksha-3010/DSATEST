// Function to draw the pattren using a while loop
function startPattren(){
      var rows = 5;  //print pattren Number
      var  i = 1
      while(i <=rows){
            if(i % 2 !== 0){
                  console.log("**")
            }else{
                  console.log("*")
            }
            i++
      }
}
// call the function to draw the patteren
startPattren()


