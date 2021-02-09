
// 1.Use a do...while loop to console.log the numbers from 1 to 1000.
// let i = 0;

// do {
  //   i = i + 1;
  //   console.log(i )
  // } while (i <  1000);
  
  const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  }

//3. Create a function that logs out the keys of the object using Object.keys().
console.log(Object.keys(person));
// 4. Create a function that logs out the keys and values of the object using Object.entries().
console.log(Object.entries(person))


//5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 
//Feel free to change the values to reflect multiple people you might have in your database.
const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  }, 
  {
    firstName: "Jamie",
    lastName: "Smith",
    birthDate: "June 28, 1993",
    gender: "female"
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    birthDate: "Feb 15, 1995",
    gender: "female"
  },
  {
    firstName: "Jake",
    lastName: "Mane",
    birthDate: "Jan 10, 2004",
    gender: "male"
  },
  // {
  //   firstName: "Wendy",
  //   lastName: "Wu",
  //   birthDate: "Sept 4, 1895",
  //   gender: "female"
  // }
  
]
// 6. Create a function that uses a for...of loop and an if statement to console.log 
//the value associated with the key birthDate of each object if the birth year is an odd number.
//odd birthDate numbers

// FORLOOP
// for (i = 0, i < arrayOfPersons.length; i++)
// let oddBirth = parseInt(person [0].birthDate.slice(-4))
// if(oddBirth % 2 == 1) {
//   return oddBirth
//   console.log(oddBirth)
// };

// FOR OF LOOP?? 
for (const element of arrayOfPersons) {
  // parseint will return the number from .slice method (string)
  let oddBirth = parseInt(element.birthDate.slice(-4))
  if(oddBirth % 2 == 1) {
  console.log(oddBirth)
  }
}

//7.  Use .map() to map over the arrayOfPersons and console.log() their information.
// .map()
function myFriend(i) {
let friendName = [i.firstName, i.lastName, i.birthDate, i.gender].join(" ");
return friendName;
}

console.log(arrayOfPersons.map(myFriend))
//8. Use .filter() to filter the persons array and console.log only males in the array.
// .filter()

// const checkGender = (i) => {}
//   let friendGender = i.gender;
//   return friendGender;

const checkGender = arrayOfPersons.filter(i => i.gender == `male`);
console.log(checkGender);


// 9. Create a function that returns true or false if the value of birthDate is before Jan 1, 1990.
const checkBirthDate = (element) => {
  for (const element of array) {
  let birthYear = parseInt(element.birthDate.slice(-4));
  if(birthYear < 1990){
    return element;
  }
}
}

//10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const checkYear = arrayOfPersons.filter(i => parseInt(i.birthDate.slice(-4))<1990);
// const checkYear = checkBirthDate(arrayOfPersons)
console.log(checkYear)
