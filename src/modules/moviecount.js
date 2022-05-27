const countMovies = () => {
const movieCount = document.querySelector('#movies-count');
const movieContainer = document.querySelector("#movie-list");
const totalMovies = movieContainer.getElementsByTagName("article").length;
movieCount.innerHTML = totalMovies; 
}
export default countMovies;
  