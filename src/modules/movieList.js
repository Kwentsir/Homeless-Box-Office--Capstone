import enableReserve from './reserve.js';
import commentFunction from './comment.js';
import { getLikes, postLikes } from './likes.js';
import countMovies from './moviecount.js';

export const listenHeartClicks = (movieId, likes) => {
  const likeHeart = document.querySelectorAll('.fa-heart');
  likeHeart.forEach((like) => {
    if (like.id === movieId) {
      likes = Number(likes) + 1;
      like.nextElementSibling.textContent = likes;
      postLikes(movieId);
    }
  });
};

const updateLikes = async () => {
  const allLikes = await getLikes();
  const heartSpans = document.querySelectorAll('.like-span');

  heartSpans.forEach((span) => {
    allLikes.forEach((likeObject) => {
      if (span.id === likeObject.item_id) {
        span.innerHTML = likeObject.likes;
      }
    });
  });
};

const displayMovies = async (data) => {
  const displayMovies = document.querySelector('#movie-list');
  data.forEach((movie) => {
    displayMovies.innerHTML += `<article class="movie">
    <img src="${movie.image.medium}" alt="${movie.name}">
    <h2>${movie.name}</h2>
    <p class="genre">${movie.genres}</p>
    <div class="like-rating">
    <i class="fa-solid fa-heart" id="${movie.id}"></i>
    <span id="${movie.id}" class="like-span">0</span>
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
  updateLikes();
};

const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  const slicedData = data.slice(0, 50);
  displayMovies(slicedData);
  enableReserve();
  commentFunction();
  countMovies();
};

export default getMovies;
