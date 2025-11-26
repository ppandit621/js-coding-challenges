// Q4. JSON Converter
// Write safeParse(jsonStr) that returns parsed JSON or "Invalid JSON" using try/catch .

function safeParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return "Invalid JSON";
  }
}

console.log(safeParse('{"name":"Shyam","age":25}'));

console.log(safeParse('{name:"Hari",age:25}'));  //Invalid