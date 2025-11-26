function checkTypes(values) {
  return values.map(value => typeof value);
}
console.log(checkTypes([1, "a", true, null, undefined]));
