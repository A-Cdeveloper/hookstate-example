export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  if (response.status === 404) {
    throw new Error("Error loading resurces");
  }
  return data;
};

export const sendPost = async (post) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.status === 404) {
    throw new Error("Error loading resurces");
  }
  const data = await response.json();
  return data;
};
