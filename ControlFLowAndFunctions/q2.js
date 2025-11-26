// Q2. Day Name (Switch)
// Write getDayName(num) using switch-case .
// Input: 3 → Output: "Wednesday"
// Include one intentional fall-through case.

function getDayName(num){
	 let day="";
	 switch(num){
		 case 1:
		 day = "Sunday";
		 break;
		 case 3:
		 day = "Wednesday";
		 break;
		 case 4:
		 case 5:
		 day = "Saturday";
		 break;
		 default:
	     day = "Invalid";
		 break;
	 }
	 return day;
 }
 
 console.log(getDayName(3));