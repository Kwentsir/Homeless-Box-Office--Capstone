const reqUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/reservations/';
const name = document.querySelector('.username');
const start = document.querySelector('.dateStart');
const end = document.querySelector('.dateEnd');

const addReservation = async (itemId, username, dateStart, dateEnd) => {
    console.log('In reservation func: ', itemId, username.value, dateStart.value, dateEnd.value);
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
                        date_end: dateEnd.value
                    }),
            });
                const data = await response.json();
                console.log('Response data: ', data)
                return true;
        }
        catch (err) {
           console.log('Request error: ', err);
        }
    }
    return false;
};

module.exports = addReservation;
