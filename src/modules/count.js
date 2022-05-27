import getMovies from './movieList.js';

const movieCount = document.getElementById('movies-count');
const movies = await getMovies();
const countMovies = (movies) => movies.length;
movieCount.innerHTML = countMovies(movies);
export default countMovies;
