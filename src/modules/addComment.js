import { displayComment } from './getComment.js';

const addComment = (itemId) => {
  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments';

  const postFunction = (reviewer, review) => {
    fetch(`${urlRoot}`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `item${itemId}`,
        username: `${reviewer}`,
        comment: `${review}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const formatYmd = (date) => date.toISOString().slice(0, 10);
    const d = formatYmd(new Date());
    displayComment([
      { creation_date: `${d}`, username: `${reviewer}`, comment: `${review}` },
    ]);
  };

  const commentForm = document.querySelector('#add-comment');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewerSelector = document.querySelector('#reviewer-name');
    const reviewSelector = document.querySelector('#review');
    const reviewer = reviewerSelector.value;
    const review = reviewSelector.value;
    postFunction(reviewer, review);
  });
};

export default addComment;
