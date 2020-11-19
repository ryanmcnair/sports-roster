import axios from 'axios';

const baseUrl = 'https://sports-roster-647bb.firebaseio.com/players';

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((resp) => {
    resolve(Object.values(resp.data));
  }).catch((error) => reject(error));
});

export default { getPlayers };
