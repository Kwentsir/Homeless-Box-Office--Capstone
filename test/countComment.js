const countComment = () => {
  const reviewCounterSpan = document.querySelector('#review-count');

  const commentCounter = document.querySelector('#comment-section');
  const allChildren = commentCounter.getElementsByTagName('li').length;

  reviewCounterSpan.innerHTML = allChildren;
};

export default countComment;