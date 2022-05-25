const addComment = (itemId) => {
  const urlRoot =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments";
  let commentForm = document.querySelector("#add-comment");
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let reviewerSelector = document.querySelector("#reviewer-name");
    let reviewSelector = document.querySelector("#review");
    let reviewer = reviewerSelector.value;
    let review = reviewSelector.value;
    postFunction(reviewer, review);
  });

  const postFunction = (reviewer, review) => {
    fetch(`${urlRoot}`, {
      method: "POST",
      body: JSON.stringify({
        item_id: `item${itemId}`,
        username: `${reviewer}`,
        comment: `${review}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
};

export default addComment;
