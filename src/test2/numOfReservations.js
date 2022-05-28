const numofreservation = (res) => (typeof (res) === 'object' ? res.length : 'no match');
module.exports = numofreservation;