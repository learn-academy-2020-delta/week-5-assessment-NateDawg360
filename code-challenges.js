// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const lettersToNumbers = (string) => {
// split string into an array
    return string.split("")
//map through array and assign each value with an integer if value of a string absolutley equals a, should equal 4 and so on.
    .map(value => value === 'a' ? 4 : value === 'e' ? 3 : value === 'i' ? 1 : value === 'o' ? 0 : value)
    // then join arrays back together to make a string.
    .join("")
}
console.log(lettersToNumbers(secretCodeWord1));
console.log(lettersToNumbers(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// We're going to create a constant variable that will first filter through the array and use the .include method to return only words that have the letter 'a' or 'A'.  this will be chained to a conditional statement.
const arrayOfAs = (array) => {
    return array.filter(val => {
        if (val.includes('a') || val.includes('A')) {
            return val
        }
    })
}

console.log(arrayOfAs(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
// return true if there are two 5's and 2 3's in array

const pairOfFivesThrees = (array) => {  
  // create mew empty array to take in original array
    newArray = [] 
    // begin with map function
    array.map( value => newArray
      // .include to identify if there are any of the same values twice in array.  Empty quotes I believe indicates we're iterating through each index.
      .includes(value) ? "" : newArray
      // push new value into new array
      .push(value)) 
       return newArray
       // If no 2 integers of same value, filter array and return boolean value false
       .length !== 2 ? false : array.filter( value => value === answerArray[0])
       // If 2 integers of same value twice, filter array and return boolean value true
       .length == 2 ? true : array.filter( value => value === answerArray[1])
       // Else 1 pair of integer of same value in array, filter array and return boolean value false
       .length == 2 ? true : false  }





console.log(pairOfFives(hand1));
console.log(pairOfFives(hand2));
console.log(pairOfFives(hand3));
