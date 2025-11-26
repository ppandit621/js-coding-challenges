// Q4. Safe Division
// Write a function divide(a, b) that returns "Invalid" if division is not possible (e.g.,
// dividing by 0 or passing non-numbers). Use explicit type conversion for input
// validation.

function divide(a,b){
	const c=Number(a);
	const d=Number(b);
	
	if(isNaN(c) || isNaN(d) || d==0){
		return "Invalid";
	}
	return c/d;
}

console.log(divide(12,0));