import enableReserve from "./reserve.js";
import commentFunction from "./comment.js";
import { getLike, getLikes, postLike } from "./likes.js";

const listenHeartClicks = () =>{
  const likeHeart = document.querySelectorAll(".like-icon");
  likeHeart.forEach((icon) =>{
    icon.addEventListener('click', async (e) =>{
      const {id} = e.target.dataset;
      const response = await postLike(id);
      if (response.status === 201){
        e.target.nextElementSibling.innerHTML = Number(e.target.nextElementSibling.innerHTML) + 1;
      }
    });
  });
};
const likes = await getLikes();

const displayMovies = (data) => {
  const displayMovies = document.querySelector("#movie-list");
  data.forEach((movie) => {
    displayMovies.innerHTML += `<article class="movie">
<img src="${movie.image.medium}" alt="${movie.name}">
<h2>${movie.name}</h2>
<p class="genre">${movie.genres}</p>
<div class="like-rating">
<i class="fa-solid fa-heart like-icon" id="${movie.id}"></i>
<i class="fa-solid fa-star rate-icon" id="${movie.id}"></i>
</div>
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
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  const slicedData = data.slice(0, 50);
  displayMovies(slicedData);
  enableReserve();
  commentFunction();
};
getMovies();
export default getMovies;
