const enableReserve = () => {
  const showReservation = ({ ...data }) => {
    const reservationContent = document.querySelector('#display-reservations');
    reservationContent.innerHTML = `
            <span class="hide-reservation" title="Close preview">X</span>
            <section class="movieContent">
                <div class="branding">
                    <img src="${data.logo}" />
                    <h3 class="reserve-title">${data.title}</h3>
                </div>
                <table class="movie-metrics">
                    <tr>
                        <td><b>Langauge:</b> ${data.language}</td>
                        <td><b>Premier:</b> ${data.premier}</td>
                    </tr>
                    <tr>
                        <td><b>Rating:</b> ${data.rating}</td>
                        <td><b>Ended:</b> ${data.ended}</td>
                    </tr>
                </table>
            <section>
        `;
    const hideReservationBtn = reservationContent.querySelector('.hide-reservation');
    reservationContent.style.display = 'flex';
    hideReservationBtn.addEventListener('click', () => {
      reservationContent.style.display = 'none';
    });
  };
  const movies = document.querySelectorAll('.show-reserve-popup');
  movies.forEach((movie) => {
    const id = movie.getAttribute('id');
    const title = movie.getAttribute('title');
    const logo = movie.getAttribute('banner');
    const rating = movie.getAttribute('rating');
    const premier = movie.getAttribute('premier');
    const ended = movie.getAttribute('ended');
    const language = movie.getAttribute('language');
    movie.addEventListener('click', () => {
      showReservation({
        movieId: id, title, logo, premier, rating, ended, language,
      });
    });
  });
};

export default enableReserve;