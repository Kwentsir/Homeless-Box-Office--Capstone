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

  let dialog = document.querySelector('dialog');
  dialog.showModal();

  getSingleMovieData(targetId).then((singleData) => {
  
    dialog.innerHTML = `
    <a id="close-button" class="comment-popup-close-button" href="#">X</a>
   
    <div id="image-frame">
    <img id="media-poster" src="${singleData.image.original}">
    </div>
    <p>${singleData.name} ${singleData.rating.average}</p>
    <p><strong>Genre:</strong> ${singleData.genres}</p>
    <p>${singleData.summary}</p>
    <br>
    `;


    let closeButton = document.querySelector("#close-button");
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  });
};

commentButtons.forEach(addClickEvent);
