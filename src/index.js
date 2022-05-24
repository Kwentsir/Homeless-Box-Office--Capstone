import './style.css';
import getMovies from './modules/movieList.js';
// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';

const displayMovies = document.querySelector('#movie-list');
getMovies.forEach(
  (movie) =>
    {displayMovies.innerHTML += `<article class="movie">
<img src="${movie.image.medium}" alt="${movie.name}">
<h2>${movie.name}</h2>
<p class="genre">${movie.genres}</p>
<p class = "summary">${movie.summary}</p>
<div>
<button>Comments</button>
<button>Reservations</button>
</article>
`}
);
