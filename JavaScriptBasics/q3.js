// Write a function filterTruthy(arr) that returns only truthy values. Do not use Boolean()
// —use an if condition.

function filterTruthy(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {   // if condition checks truthiness
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterTruthy([0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]));