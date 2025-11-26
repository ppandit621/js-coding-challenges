// Q4. Parallel Fetch
// Fetch these two URLs in parallel using Promise.all() and return a combined array:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

async function fetchData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts"
  ];

  const [usersRes, postsRes] = await Promise.all(
    urls.map(url => fetch(url))
  );

  const users = await usersRes.json();
  const posts = await postsRes.json();

  return [users, posts];
}

fetchData().then(data => {
  console.log("Users:", data[0]);
  console.log("Posts:", data[1]);
});