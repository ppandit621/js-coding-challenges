// Q5. Async/Await Fetch
// Write getUser(id) using async/await to fetch user data. Wrap in try/catch . If fetch fails,
// return "Error" .

async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);

    if (!res.ok) {
      throw new Error("Network error");
    }

    const data = await res.json();
    return data;

  } catch (err) {
    return "Error";
  }
}

getUser(1).then(result => console.log(result));
getUser(99999).then(result => console.log(result));