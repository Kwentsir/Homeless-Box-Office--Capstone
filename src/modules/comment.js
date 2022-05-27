import getComment from './getComment.js';
import addComment from './addComment.js';

const commentFunction = () => {
  const getSingleMovieData = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const singleData = await response.json();
    return singleData;
  };

  const commentButtons = document.querySelectorAll('.comment');

  const openPopup = (event) => {
    const targetId = event.target.id;

    const dialog = document.querySelector('dialog');
    dialog.showModal();

    getSingleMovieData(targetId).then((singleData) => {
      dialog.innerHTML = `
          <a id="close-button" class="comment-popup-close-button" href="#">X</a>
        <div class="poster-container">
          <img id="media-poster" src="${singleData.image.original}">
          </div>
      <div class="movie-description">
          <p>${singleData.name} ${singleData.rating.average}</p>
          <p><strong>Genre:</strong> ${singleData.genres}</p>
          <p>${singleData.summary}</p>
          </div>
          <br>
         
          <ul id="comment-section">
          <p id="review-title">Reviews (<span id="review-count">0</span>)</p>
          </ul>

          <form id="add-comment">
          <input id="reviewer-name" type="text" maxlength="30" placeholder="Your Name">
          <textarea  id="review" maxlength="500" placeholder="Your Review"></textarea>
           <button id="comment-submit" type="submit">Submit</button>
          <form>
      `;

      const closeButton = document.querySelector('#close-button');
      closeButton.addEventListener('click', () => {
        dialog.close();
      });
      // Call get comment function
      getComment(targetId);
      // Call add comment function
      addComment(targetId);
    });
  };
  const addClickEvent = (button) => {
    button.addEventListener('click', openPopup);
  };

  commentButtons.forEach(addClickEvent);
};

export default commentFunction;
