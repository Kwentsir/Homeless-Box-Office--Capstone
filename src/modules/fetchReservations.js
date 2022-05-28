const endpointLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/reservations';

const fetchReservations = async (movieId) => (
  fetch(`${endpointLink}?item_id=${movieId}`)
    .then((res) => res.json())
    .then((data) => (data.error ? ({
      error: true,
      debug: data,
      msg: data.error.message,
    })
      : ({
        error: false,
        data,
      })))
    .catch(() => ({
      error: true,
      msg: 'Something went wrong, please try again later',
    }))
);

export default fetchReservations;