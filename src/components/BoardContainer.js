import React, { Component } from 'react';
import playerData from '../helpers/data/playerData';
import Players from './Players';
import PlayerForm from './Forms';

export default class BoardContainer extends Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.loadData();
  }

  addUpdatePlayer = (playerObj) => {
    if (playerObj.id === '') {
      playerData.addPlayer(playerObj).then((response) => {
        if (!response.error) {
          this.loadData();
        }
      });
    } else {
      playerData.updatePlayer(playerObj).then((response) => {
        if (!response.error) {
          this.loadData();
        }
      });
    }
  }

  loadData = () => {
    playerData.getPlayers().then((response) => {
      this.setState({
        players: response,
      });
    });
  }

  removePlayer = (e) => {
    const removedPlayer = this.state.players.filter((player) => player.id !== e.target.id);
    this.setState({
      players: removedPlayer,
    });
    playerData.deletePlayer(e.target.id).then(() => this.loadData());
  }

  render() {
    const { players } = this.state;
    const renderPlayerToDom = () => players.map((player) => <Players key={player.id} player={player} removePlayer={this.removePlayer} />);
    return (
      <>
        <PlayerForm addUpdatePlayer={this.addUpdatePlayer} player={''} />
      <div className='BoardContainer'>
      <div className='Header'></div>
        {renderPlayerToDom()}
      </div>
      </>
    );
  }
}
