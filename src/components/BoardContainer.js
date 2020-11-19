import React, { Component } from 'react';
import playerData from '../helpers/data/playerData';
import Players from './Players';

export default class BoardContainer extends Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    playerData.getPlayers().then((response) => {
      this.setState({
        players: response,
      });
    });
  }

  render() {
    const { players } = this.state;
    const renderPlayerToDom = () => players.map((player) => <Players key={player.id} player={player} />);
    return (
      <div className='BoardContainer'>
      <h2 className='Header'>Players</h2>
        {renderPlayerToDom()}
      </div>
    );
  }
}
