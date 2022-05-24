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
  let response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  let singleData = await response.json();
  return singleData;
};

const commentButtons = document.querySelectorAll(".comment");

const addClickEvent = (button) => {
  button.addEventListener("click", openPopup);
};

const openPopup = (event) => {
  let targetId = event.target.id;

  getSingleMovieData(targetId).then((singleData) => {
    let popUp = document.createElement("div");
    popUp.classList.add("comment-popup");
    popUp.innerHTML = `
    <a class="comment-popup-close-button href="#">X</a>
   
    <div id="image-frame">
    <img id="media-poster" src="${singleData.image.original}">
    </div>
    <p>${singleData.name} ${singleData.rating.average}</p>
    <p><strong>Genre:</strong> ${singleData.genres}</p>
    <p>${singleData.summary}</p>
    <br>
    `;
    document.body.appendChild(popUp);
  });
};

commentButtons.forEach(addClickEvent);
