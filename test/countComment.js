const countComment = () => {
  const commentCounter = document.querySelector('#comment-section');
  const allChildren = commentCounter.getElementsByTagName('li').length;

  return allChildren;
};

export default countComment;
