// Q4. Find By ID
// Write findById(arr, id) using find() only.

function findById(arr, id) {
  return arr.find(item => item.id === id);
}

const input1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

console.log(findById(input1, 2));