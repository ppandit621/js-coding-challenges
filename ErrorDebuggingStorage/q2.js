// Q2. Async Error Handler
// Write an async function that fetches from an invalid URL, catches the error, and
// returns "Failed" .

async function fetchData() {
  try {
    const response = await fetch("https://jscoding.com"); 
    const data = await response.json();
    return data;
  } catch (error) {
    return "Failed";
  }
}


fetchData().then(result => console.log(result));