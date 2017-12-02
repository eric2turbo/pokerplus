import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './Card';

class LastPlayed extends Component {
  render() {
    return (
      <h3> {this.props.lastPlay.map(card => {
        return <div className="card" key={card.id}>{card.rank} {card.suit} {card.id}</div>
      })} 
      </h3>
    );
  }
}


export default LastPlayed;
