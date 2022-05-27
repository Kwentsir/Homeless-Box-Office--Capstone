import './style.css';
import getMovies, { listenHeartClicks } from './modules/movieList.js';
import countMovies from './modules/moviecount.js';
getMovies();
countMovies();
// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const likes = e.target.nextElementSibling.textContent;
    listenHeartClicks(e.target.id, likes);
  }
});
