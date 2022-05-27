const baseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh";
const getLikes = async () => {
  const response = await fetch(`${baseUrl}/likes`);
  const data = await response.json();
  return data;
};

const postLikes = async (movieId) => {
  const response = await fetch(`${baseUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: movieId }),
  });
  response();
};
export { getLikes, postLikes };
