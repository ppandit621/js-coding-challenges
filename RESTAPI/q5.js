// Q5. Paginated Loader
// Fetch:
// /posts?_page=1 then /posts?_page=2
// Combine results into one array

async function loadPaginatedPosts() {
  try {
    const [page1Response, page2Response] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts?_page=1'),
      fetch('https://jsonplaceholder.typicode.com/posts?_page=2')
    ]);

    if (!page1Response.ok || !page2Response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const [page1Posts, page2Posts] = await Promise.all([
      page1Response.json(),
      page2Response.json()
    ]);

    const allPosts = [...page1Posts, ...page2Posts];
    return allPosts;
  } catch (error) {
    console.error(error);
  }
}

loadPaginatedPosts().then(posts => console.log(posts));