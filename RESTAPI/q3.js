// Q3. Auth Fetch
// Write a fetch request that adds:
// Authorization: "Bearer 12345"
// Print the response JSON.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET', 
  headers: {
    'Authorization': 'Bearer 12345',
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network Error');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));