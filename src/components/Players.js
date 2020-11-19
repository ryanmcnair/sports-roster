import React, { Component } from 'react';
// import Forms from './Forms';

export default class Players extends Component {
  state = {
    edit: false,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-3 mb-3" id={player.id}>
        <div className="card">
          <h5 className="card-title">{player.name}</h5>
          <img src={player.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Position: {player.position}</p>
          </div>
          <div className="card-footer">
            <button className='btn btn-danger my-2' id={player.id} >Remove Player</button>
          </div>
            <button className="btn btn-info" >Update Player</button>
        </div>
      </div>
    );
  }
}
