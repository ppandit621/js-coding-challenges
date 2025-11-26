// Q4. Sum All (Rest Parameters)
// Write sumAll(...nums) that returns the sum of unlimited input values.

function sumAll(...nums){
	 let sum=0;
	 for(const item of nums){
		 sum+=item;
	 }
	 
	 return sum;
 }
 
 console.log(sumAll(5,6,7,8));