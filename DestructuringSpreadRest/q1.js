// Q1. Array Destructure
// Write a function that takes an array of 3 numbers and returns:
// First element
// Third element
// Default value = 0 if missing

function getFirstAndThird([first = 0, , third = 0]) {
  return [first, third];
}

console.log(getFirstAndThird([10, 20, 30])); // [10, 30]
console.log(getFirstAndThird([5, 7]));       // [5, 0]