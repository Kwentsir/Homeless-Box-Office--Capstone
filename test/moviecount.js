const countMovies = () => {
  const movieContainer = document.querySelector('#movie-list');
  const totalMovies = movieContainer.getElementsByTagName('article').length;
  return totalMovies;
};
export default countMovies;
