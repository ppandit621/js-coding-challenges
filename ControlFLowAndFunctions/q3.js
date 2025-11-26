// Q3. Reverse Array (Using for…of )
// Write reverseArray(arr) that builds a reversed array without using the built-in 
// reverse() method. Use for…of .

function reverseArray(arr) {
  const result = [];

  for (const item of arr) {
    result.unshift(item);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4]));