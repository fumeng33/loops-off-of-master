'use strict'

// let numbers = [2, 3,5,2,4,9,3];
// //filter down to just the odd numbers
// let odd =numbers.filter(function(element, index){
//   if(element %2 == 0) {
//     return false;
//   }else {
//     return true;
//   }
// })
// // for every odd number print this sentence

// odd.forEach(function(element, index){
//   console.log(element, "is an odd number");
// })


/**
 * 
 * @param {arry} array  the array to loop through
 * @param {*} callback callback the callback to execute on every element in the array 
 */
let myForEach = function(array, callback) {
  // loop throught the array that is passed in
  for(let i=0; i<array.length;i++) {
    // and execute the callback function once for every element in the array
  callback(array[i], i)
  }
}

let myFind = function(array, callback){

  // loop thoguh every element in the array
  // for every element, execute the callback and store the result
  for(let i=0; i,array.length; i++){

    callback(array[i],i)
  }
    
  // is you go thought the entire loop, and have not returned
  //(ie, you are still in the function)
  // that means no element met the criteria, so return undefined (or do nother)
}
// looping through the array and calling the function 

let fruit = ['apple', 'banana', 'clementine'];

myForEach(fruit, function(element){
  console.log(element);
});

