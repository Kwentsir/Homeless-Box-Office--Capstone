
import addReservation from './addReservation';
import fetchReservations from './fetchReservations';


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
                <h3 class="reservation-title">
                  reservation (<span class="total-reservations">0</span>)
                </h3>
                <ul class="resevertions">
                  Fetching data....
                </ul>
                
    <h3 class="Reservation-title">
    </h3>
    <div class="Reserv-form">
      <h2>Add a Reservation</h2>
      <input type="text" name="username" class="username" placeholder="Your name" required>
      <input type="text" name="dateStart" class="dateStart" placeholder="Start date" required>
      <input type="text" name="dateEnd" class="dateEnd" placeholder="End date" required>
      <button class="add-reserve-btn" id="${data.id}" type="submit">Submit</button>
    </div>
        `;
    const hideReservationBtn = reservationContent.querySelector('.hide-reservation');
    reservationContent.style.display = 'flex';
    hideReservationBtn.addEventListener('click', () => {
      reservationContent.style.display = 'none';
    });

    // add reservation
    const name = document.querySelector('.username');
    const start = document.querySelector('.dateStart');
    const end = document.querySelector('.dateEnd');
    const reserveBtn = document.querySelector('.add-reserve-btn');
    reserveBtn.addEventListener('click', (e) => {
      const id = e.target.attributes.id.value;
      addReservation(id, name, start, end).then(
        getData()
      );
      name.value = '';
      start.value = '';
      end.value = '';
      
    });

    const getData = () => {

      fetchReservations(data.id).then((res) => {
        const reservations = reservationContent.querySelector('.resevertions');
        const reservationsCounter = reservationContent.querySelector('.total-reservations');
        if (res.error === true) {
          reservationsCounter.innerHTML = '0';
          reservations.innerHTML = 'No reservations have been filed yet. Be the first to make a reservation :-)';
        } else {
          reservations.innerHTML = '';
          reservationsCounter.innerHTML = res.data.length;
          res.data.forEach((reservation) => {
            reservations.innerHTML += `
            <li>From ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}</li>
            `;
          });
        }
      });
    };

    // fetch reservations from API
    fetchReservations(data.id).then((res) => {
      const reservations = reservationContent.querySelector('.resevertions');
      const reservationsCounter = reservationContent.querySelector('.total-reservations');
      if (res.error === true) {
        reservationsCounter.innerHTML = '0';
        reservations.innerHTML = 'No reservations have been filed yet. Be the first to make a reservation :-)';
      } else {
        reservations.innerHTML = '';
        reservationsCounter.innerHTML = res.data.length;
        res.data.forEach((reservation) => {
          reservations.innerHTML += `
          <li>From ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}</li>
          `;
        });
      }
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
        id, title, logo, premier, rating, ended, language,
      });
    });
  });
};

export default enableReserve;