import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './Card';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <h3>Player {this.props.name} Hand </h3>
        <div><p>Cards Left: {this.props.hand.length} </p> 
          {this.props.hand.map(card => {
            return <Card key={card.id} id={card.id} rank={card.rank} suit={card.suit} />
          })}
        </div>
      </div>
    );
  }
}


export default Player;
