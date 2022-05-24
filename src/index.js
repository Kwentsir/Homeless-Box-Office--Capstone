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

let addClickEvent = (button) => {
  button.addEventListener("click", getIdFromButton);
};

let getIdFromButton = (event) => {
  let targetEvent = event.target;
  return targetEvent.id;
};

commentButtons.forEach(addClickEvent);
