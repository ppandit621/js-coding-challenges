// Q5. Counter (Closure)
// Write a function createCounter() that returns:
// increment() → increments count
// get() → returns current count
// Must use closure, not global variables


function createCounter() {
  let count = 0; // private variable (closure)

  return {
    increment() {
      count++;
    },
    get() {
      return count;
    }
  };
}

// Example usage:
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.get()); 