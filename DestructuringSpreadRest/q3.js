// Q3. Rest Parameters Sum
// Write sum(...nums) that returns the sum of unlimited numbers

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));        
console.log(sum(5, 10, 15, 20));  
console.log(sum());    