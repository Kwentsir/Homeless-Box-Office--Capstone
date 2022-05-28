import './style.css';
import getMovies, { listenHeartClicks } from './modules/movieList.js';

getMovies();

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const likes = e.target.nextElementSibling.textContent;
    listenHeartClicks(e.target.id, likes);
  }
});
