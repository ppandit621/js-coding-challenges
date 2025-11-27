// Q4. Parallel Fetch Merge
// Fetch /posts and /comments in parallel using Promise.all() and return:
// { posts: [...], comments: [...] }

async function fetchPostsAndComments() {
  try {
    const [postsResponse, commentsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    if (!postsResponse.ok || !commentsResponse.ok) {
      throw new Error('Failed to fetch posts or comments');
    }

    const [posts, comments] = await Promise.all([
      postsResponse.json(),
      commentsResponse.json()
    ]);

    return { posts, comments };
  } catch (error) {
    console.error(error);
  }
}

fetchPostsAndComments().then(data => console.log(data));