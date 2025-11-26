// Q1. Named Export Calculator
// Create a file math.js exporting add() and sub() (named exports). Import them in 
// main.js and use them.

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}