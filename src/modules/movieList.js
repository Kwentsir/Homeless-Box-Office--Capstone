const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  const slicedData = data.slice(0, 50);
  displayMovies(slicedData);
};
getMovies();

let displayMovies = (data) => {
  const displayMovies = document.querySelector('#movie-list');
  data.forEach((movie) => {
    displayMovies.innerHTML += `<article class="movie">
<img src="${movie.image.medium}" alt="${movie.name}">
<h2>${movie.name}</h2>
<p class="genre">${movie.genres}</p>
<p class = "summary">${movie.summary}</p>
<div>
<button>Comments</button>
<button>Reservations</button>
</article>
`;
  });
};

export default getMovies;
