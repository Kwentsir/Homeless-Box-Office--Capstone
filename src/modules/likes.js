const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh';
const getLikes = async () => {
  const response = await fetch(`${baseUrl}/likes`);
  const data = await response.json();
  return data;
};

const getLike = (id, likes) => {
  if (likes.length > 0) {
    const result = likes.find((like) => +like.item_id === +id);
    return result ? result.likes : 0;
  }
  return 0;
};

export {getLikes, getLike};