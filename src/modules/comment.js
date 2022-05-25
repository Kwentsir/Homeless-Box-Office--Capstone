import getComment from './getComment.js';

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
          <p id="review-title">Reviews</p>
          </ul>
      `;

      const closeButton = document.querySelector('#close-button');
      closeButton.addEventListener('click', () => {
        dialog.close();
      });
      // Get comment function
      getComment(targetId);
    });
  };
  const addClickEvent = (button) => {
    button.addEventListener('click', openPopup);
  };

  commentButtons.forEach(addClickEvent);
};

export default commentFunction;
