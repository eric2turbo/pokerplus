import React, { Component } from 'react';
import { render } from 'react-dom';

class Card extends Component {
  render() {
    return (
      <div key={this.props.id} className="card" id={this.props.id}>
        {this.props.rank} {this.props.suit}
      </div>
    );
  }
}

export default Card;
