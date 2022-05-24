import "./style.css";

// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';

const fetchData = async () => {
  await fetch("https://api.tvmaze.com/shows").then((response) =>
    response.json()
  );
  // .then((json) => alert(json));
};

fetchData();

const commentButtons = document.querySelectorAll(".comment");

const addClickEvent = (button) => {
  button.addEventListener("click", openPopup);
};

const openPopup = () => {
  let popUp = document.createElement("div");
  popUp.classList.add("comment-popup");
  popUp.innerHTML = `hi`;
  document.body.appendChild(popUp);
};

commentButtons.forEach(addClickEvent);
