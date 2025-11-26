// Q2. Deep Access
// Write getCity(user) that returns user.address.current.city . If any part is missing, return 
// "Unknown" .

function getCity(user) {
  return user?.address?.current?.city ?? "Unknown";
}

const user1 = { address: { current: { city: "KTM" } } };
const user2 = { address: { previous: { city: "BKT" } } };
const user3 = {};

console.log(getCity(user1)); // "KTM"
console.log(getCity(user2)); // "Unknown"
console.log(getCity(user3)); // "Unknown"