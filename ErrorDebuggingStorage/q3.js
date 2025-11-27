// Q3. Debugger Demo
// Write a function where inserting debugger helps inspect loop execution.

function GetData() {
  for (let i = 0; i < 5; i++) {
    debugger; 
    console.log(i);
  }
}

GetData();