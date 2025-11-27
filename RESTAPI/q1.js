// Q1. Fetch Users
// Write getUsers() that fetches users from JSONPlaceholder and returns an array
// of names
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const names = users.map(user => user.name);
    return names;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

getUsers().then(names => console.log(names));