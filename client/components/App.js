import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Player from './Player';
import LastPlayed from './LastPlayed';

class App extends Component {
  constructor() {
    super();
    let deck = [];
    const ranks = [3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2];
    const suits = ['D', 'C', 'H', 'S'];
    ranks.forEach(rank => suits.forEach((suit) => {
      deck.push({ suit: suit, rank: rank });
    }));
    deck = deck.map((card, idx) => {
      card.id = idx;
      return card;
    });
    this.state = {
      player: 'codesmith',
      opponent: 'testing',
      playerHand: [],
      oppHand: [],
      lastPlay: deck,
      currentRule: 'any3',
    };
  }
  
  render() {
  
    return (
      <div id="main" >
        <Player name={this.state.opponent} hand={this.state.oppHand} />
        <LastPlayed lastPlay={this.state.lastPlay} />
        <Player name={this.state.player} hand={this.state.playerHand} />
      </div>
    );
  }
}

export default App;
