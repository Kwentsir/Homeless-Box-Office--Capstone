const reqUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/reservations/';

const addReservation = async (itemId, username, dateStart, dateEnd) => {
  if (username.value !== '' || dateStart.value !== '' || dateEnd.value !== '') {
    try {
      const response = await fetch(`${reqUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          date_start: dateStart.value,
          date_end: dateEnd.value,
        }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return false;
    }
  }
  return false;
};

module.exports = addReservation;
