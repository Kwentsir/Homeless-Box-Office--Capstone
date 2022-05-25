const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh';
const getLikes = async () => {
  const response = await fetch(`${baseUrl}/likes`);
  const data = await response.json();
  return data;
};

export default getLikes;