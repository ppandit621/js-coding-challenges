// Q1. Grade Calculator
// Write getGrade(score) using if/else :
// 90–100 → "A"
// 80–89 → "B"
// …
// Return "Invalid" for out-of-range values.


function getGrade(score){
	 const Score=Number(score);
	 if (isNaN(Score) || Score<80 || Score >100){
		 return "Invalid";
	 }
	 if(Score>= 90){
			return "A";
	 }
	
	return "B";
	 
 }
 
 
 console.log(getGrade(88));
 console.log(getGrade(102)); 