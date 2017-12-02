import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './Card';

class LastPlayed extends Component {
  render() {
    return (
      <div>
        <h3>Last Played Hand</h3> 
        {this.props.lastPlay.map(card => {
          return <div className="card" key={card.id}>{card.rank} {card.suit} {card.id}</div>
        })} 
      </div>
    );
  }
}


export default LastPlayed;
