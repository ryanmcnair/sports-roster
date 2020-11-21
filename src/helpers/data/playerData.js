import axios from 'axios';

const baseUrl = 'https://sports-roster-647bb.firebaseio.com/players';

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((resp) => {
    resolve(Object.values(resp.data));
  }).catch((error) => reject(error));
});

const addPlayer = (playerObj) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}.json`, playerObj).then((resp) => {
    axios.patch(`${baseUrl}/${resp.data.name}.json`, { id: resp.data.name }).then((patchResp) => {
      resolve(patchResp);
    }).catch((error) => reject(error));
  });
});

const updatePlayer = (playerObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/${playerObj.id}.json`, playerObj).then((resp) => {
    resolve(resp);
  }).catch((error) => reject(error));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/${playerId}.json`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPlayers, addPlayer, updatePlayer, deletePlayer,
};
