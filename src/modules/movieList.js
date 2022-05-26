import enableReserve from "./reserve.js";
import commentFunction from "./comment.js";
import { getLikes, postLike, updateLikes } from "./likes.js";

export const listenHeartClicks = (movieId, likes) => {
  const likeHeart = document.querySelectorAll(".fa-heart");
  likeHeart.forEach((like) => {
    if (like.id === movieId) {
      likes = Number(likes) + 1;
      like.nextElementSibling.textContent = likes;
      updateLikes(movieId, likes);
    }
  });
};

const displayMovies = async (data) => {
  const allLikes = await getLikes();
  const displayMovies = document.querySelector("#movie-list");
  data.forEach((movie) => {
    let movieLikes = 0;
    allLikes.forEach((like) => {
      if (like.item_id === movie.id) {
        movieLikes = like.likes;
      }
    });
    displayMovies.innerHTML += `<article class="movie">
<img src="${movie.image.medium}" alt="${movie.name}">
<h2>${movie.name}</h2>
<p class="genre">${movie.genres}</p>
<div class="like-rating">
<i class="fa-solid fa-heart" id="${movie.id}"></i>
<span>${movieLikes}</span>
<i class="fa-solid fa-star" id="${movie.id}"></i>
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
  slicedData.forEach((movie) => postLike(movie.id));
  displayMovies(slicedData);
  enableReserve();
  commentFunction();
};
getMovies();
export default getMovies;
