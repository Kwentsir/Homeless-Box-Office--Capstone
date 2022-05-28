import countComment from './countComment.js';

export const displayComment = (comments) => {
  const displayCommentContainer = document.querySelector('#comment-section');
  comments.forEach((comment) => {
    displayCommentContainer.innerHTML += `
    <li><p class="comment-username">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
    <hr>
    `;
  });
  countComment();
};

const getComment = (idTarget) => {
  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments?item_id=item';

  fetch(`${urlRoot}${idTarget}`)
    .then((response) => response.json())
    .then((json) => displayComment(json))
    .then(() => countComment());
};

export default getComment;
