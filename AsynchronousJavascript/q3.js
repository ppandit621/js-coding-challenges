// Q3. Promise Calculator
// Write addAsync(a, b) that returns a Promise resolving with the sum in 1 second.

function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); 
  });
}

addAsync(3, 4).then(result => console.log(result)); 