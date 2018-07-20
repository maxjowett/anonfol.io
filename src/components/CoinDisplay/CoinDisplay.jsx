import React, { Component } from 'react';
import './CoinDisplay.css';

class CoinDisplay extends Component {
  render() {
    return (
      <div className="coindisplay">
        { this.props.coin ? this.props.coin.quotes.USD.price : null }
      </div>
    );
  }
}

export default CoinDisplay;