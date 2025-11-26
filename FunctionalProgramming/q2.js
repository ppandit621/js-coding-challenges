// Q2. Filter Adults
// Write filterAdults(users) using filter() , where age ≥ 18.
// Input: \[\{name:"A", age:17\}, \{name:"B", age:20\}\]
// Output: \[\{name:"B", age:20\}\]

function filterAdults(users) {
  return users.filter(user => user.age >= 18);
}

const input = [
  { name: "A", age: 17 },
  { name: "B", age: 20 }
];

console.log(filterAdults(input));