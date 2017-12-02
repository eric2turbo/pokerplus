import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Player from './Player';
import LastPlayed from './LastPlayed';

class Game extends Component {
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
      showPlayer: true,
      showOpponent: true,
      lastPlay: [],
      shuffledDeck: [],
      newDeck: deck,
      currentRule: 'must3',
    };

    this.shuffle = this.shuffle.bind(this);
  }
  
  shuffle() {
    
    const cardList = this.state.newDeck.slice();
    const indices = [];
    const shuffledDeck = [];
    
    for (let i = 0; i < 52; i++) {
      indices.push(i);
    }
    while (indices.length > 0) {
      shuffledDeck.push(cardList[indices.splice([Math.floor(Math.random() * indices.length)], 1)]);
    }

    const hand1 = shuffledDeck.splice(0, 13);
    const hand2 = shuffledDeck.splice(0, 13);
    return { playerHand: hand1, oppHand: hand2, lastPlay: shuffledDeck };
  }

  componentDidMount() {
    this.setState(this.shuffle());
  }
  
  render() {
  
    return (
      <div id="main" >
        <Player 
          name={this.state.opponent} 
          hand={this.state.oppHand}
          showHand={this.state.showOpponent} 
        />
        <LastPlayed 
          lastPlay={this.state.lastPlay} 
          rule={this.props.currentRule} 
        />
        <Player 
          name={this.state.player} 
          hand={this.state.playerHand}
          showHand={this.state.showPlayer} 
        />
      </div>
    );
  }
}

export default Game;
