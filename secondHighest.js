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
const number = [2,3,4,,56,6,7,8,9]
const secHigestNumber = secondHighestNumber(number)
console.log(secHigestNumber)


