// Q5. Shallow vs. Deep Copy
// Write code that:
// Makes a shallow copy of an object using spread
// Deep copies using JSON methods
// Modifies both copies
// Log which one affects the original.

const original = {
  name: "Ram",
  age: 25,
  address: { city: "Kathmandu", country: "Nepal" }
};

const shallowCopy = { ...original };
const deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy.name = "Hari";
shallowCopy.address.city = "Pokhara";

deepCopy.age = 30;
deepCopy.address.country = "India";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);