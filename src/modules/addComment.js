import { displayComment } from './getComment.js';

const addComment = (itemId) => {
  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LTC07aEzlGRDQH1SJmMa/comments';

  const postFunction = (reviewer, review, callback) => {
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
    callback([
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
    // Callback function display the review immediately after submitting the form
    postFunction(reviewer, review, displayComment);
  });
};

export default addComment;
