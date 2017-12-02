import React, { Component } from 'react';
import { render } from 'react-dom';

class Player extends Component {
  render() {
    return (
      <div>
        <h1>Player {this.props.name} Hand</h1>
        <p>Cards: {this.props.hand.map(card => {
          return <div className="card" key={card.id}>{card.rank} {card.suit} {card.id}</div>
          })}
        </p>
        <p>Cards Left: {this.props.hand.length}</p>
      </div>
    );
  }
}


export default Player;
