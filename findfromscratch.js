

//find() from scratch assignment

let ageArray = [24, 43, 55, 86]


let findAge = function (array, func) {
  // for loop to loop through each element of the passed in array
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    // if the passed in function returns true from the element, return that element
    if (func(element, i)) {
      return element
    }
    // else the function will trturn as undefined
  }
}
// test 
let found = ageArray.find(element => element > 55)
// output 86
console.log(found)