import "./style.css";

// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';

// const fetchData = async () => {
//   await fetch("https://api.tvmaze.com/shows").then((response) =>
//     response.json()
//   );
//    .then((json) => alert(json));
// };

// fetchData();

const getSingleMovieData = async (id) => {
  let request = await fetch(`https://api.tvmaze.com/shows/${id}`);
  singleData = await request.json();
  return singleData;
};

const commentButtons = document.querySelectorAll(".comment");

const addClickEvent = (button) => {
  button.addEventListener("click", openPopup);
};

const openPopup = (event) => {
  let targetId = event.target.id;

  getSingleMovieData(targetId);
  console.log(singleData);

  let popUp = document.createElement("div");
  popUp.classList.add("comment-popup");
  popUp.innerHTML = `
  <a class="comment-popup-close-button href="#">X</a>
  <p>${targetId}</p>
  `;
  document.body.appendChild(popUp);
};

commentButtons.forEach(addClickEvent);
