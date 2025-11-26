// Q2. Object Destructure & Rename
// Input:
// \{ firstName: "John", address: \{ city: "Kathmandu" \} \}
// Extract firstName as name and nested city .

const person = {
  firstName: "John",
  address: {
    city: "Kathmandu"
  }
};

const {
  firstName: name,
  address: { city }
} = person;

console.log(name); 
console.log(city); 