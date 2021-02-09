'use strict'

let numbers = [2, 3,5,2,4,9,3];
//filter down to just the odd numbers
let odd =numbers.filter(function(element, index){
  if(element %2 == 0) {
    return false;
  }else {
    return true;
  }
})
// for every odd number print this sentence

odd.forEach(function(element, index){
  console.log(element, "is an odd number");
})
