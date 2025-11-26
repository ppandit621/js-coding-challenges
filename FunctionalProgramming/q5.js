// Q5. Chained Transformation
// Given: \[1, 2, 3, 4\]
// Use map → filter → reduce to compute the sum of squares of even numbers.
// Should result in: (2² + 4²) = 20

const result = [1, 2, 3, 4]
  .map(n => n * n)          
  .filter(n => n % 2 === 0) 
  .reduce((sum, n) => sum + n, 0);

console.log(result); 