const countComment = () => {
  const commentCounter = document.querySelector('#comment-section');
  const allChildren = commentCounter.getElementsByTagName('li').length;

  const reviewCounterSpan = document.querySelector('#review-count');
  reviewCounterSpan.innerHTML = allChildren;
};

export default countComment;