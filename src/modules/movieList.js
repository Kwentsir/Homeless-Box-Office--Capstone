import enableReserve from './reserve';
import {commentFunction} from './comment'

const displayMovies = (data) => {
  const displayMovies = document.querySelector('#movie-list');
  data.forEach((movie) => {
    console.log(movie);
    displayMovies.innerHTML += `<article class="movie">
<img src="${movie.image.medium}" alt="${movie.name}">
<h2>${movie.name}</h2>
<p class="genre">${movie.genres}</p>
<div class="button">
<button class="comment" id="${movie.id}">Comments</button>
<button id="${movie.id}" class="show-reserve-popup" 
banner="${movie.image.medium}" 
title="${movie.name}" 
language="${movie.language}"
premier="${movie.premiered}"
ended="${movie.ended}"
rating="${movie.rating.average}">Reservations</button>
</article>
`;
  });
};

const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  const slicedData = data.slice(0, 50);
  displayMovies(slicedData);
  enableReserve();
  commentFunction();
};
getMovies();
export default getMovies;
