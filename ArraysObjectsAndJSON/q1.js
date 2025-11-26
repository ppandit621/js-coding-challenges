// Q1. Array Editor
// Given an array, perform these operations in order:
// push(10)
// unshift(5)
// pop()
// Splice at index 1, remove 1 item
// Return the final array

function ArrayOpr(a){
	 a.push(10);
	 a.unshift(5);
	 a.pop();
	 a.splice(1,1);
	 return a;
 }
 
 console.log(ArrayOpr([4,5,6,7]));