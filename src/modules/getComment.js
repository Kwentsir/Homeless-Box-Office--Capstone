import countComment from './countComment.js';

const getComment = (idTarget) => {
  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments?item_id=item';

  const displayCommentContainer = document.querySelector('#comment-section');

  const displayComment = (comments) => {
    comments.forEach((comment) => {
      displayCommentContainer.innerHTML += `
      <li><p class="comment-username">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
      <hr>
      `;
    });
  };

  fetch(`${urlRoot}${idTarget}`)
    .then((response) => response.json())
    .then((json) => displayComment(json))
    .then(() => countComment());
};

export default getComment;
