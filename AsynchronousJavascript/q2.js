// Q2. Interval Counter
// Write code that logs numbers 1–5 every second using setInterval . Stop
// automatically after reaching 5.

let count = 1;

const intervalId = setInterval(() => {
  console.log(count);

  if (count === 5) {
    clearInterval(intervalId);
  }

  count++;
}, 1000);