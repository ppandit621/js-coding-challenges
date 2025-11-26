// Q1. Square All
// Write squareAll(arr) using map() only.
// Input: [1, 2, 3] → Output: [1, 4, 9]

function squareAll(arr){
	
	return arr.map(value=> value*value);
	
}

console.log(squareAll([1,2,3]));