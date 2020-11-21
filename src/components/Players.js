import React, { Component } from 'react';
import propTypes from 'prop-types';
import playerShape from '../helpers/data/playerShape';
import Forms from './Forms';

export default class Players extends Component {
  static propTypes = {
    player: playerShape,
    removePlayer: propTypes.func,
  }

  state = {
    edit: false,
  }

  editPlayer = () => {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    const { player, removePlayer } = this.props;
    const { edit } = this.state;
    return (
      <div className="Player col-md-3 mb-3" id={player.id}>
        <div className="card">
          <h5 className="card-title">{player.name}</h5>
          <img src={player.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Position: {player.position}</p>
          </div>
          <div className="card-footer">
            <button className='btn btn-danger my-2' id={player.id} onClick={(e) => removePlayer(e)}>Remove Player</button>
            <button className="btn btn-info" onClick={this.editPlayer}>{edit ? 'Close Form' : 'Update Form'}</button>
            { edit && (<Forms player={player} addUpdatePlayer={this.props.addUpdatePlayer} />)}
          </div>
        </div>
      </div>
    );
  }
}
