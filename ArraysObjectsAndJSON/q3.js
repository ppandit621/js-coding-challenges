// Q3. Dynamic Keys
// Write createUser(id, name, age) that returns:
// \{
// user_id: id,
// user_name: name,
// user_age: age
// \}
// Use computed property names.

function createUser(id, name, age) {
  return {
    ["user_id"]: id,
    ["user_name"]: name,
    ["user_age"]: age
  };
}

console.log(createUser(1, "Govinda", 30));