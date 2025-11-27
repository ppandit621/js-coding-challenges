// Q2. Create Post
// Write createPost(title, body) using POST with fetch() . Return the created post

async function createPost(title, body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body })
    });

    if (!response.ok) {
      throw new Error('Failed..');
    }

    const PostResponse = await response.json();
    return PostResponse;
  } catch (error) {
    console.error(error);
  }
}

createPost('My Title', 'This is the body.')
  .then(post => console.log(post));