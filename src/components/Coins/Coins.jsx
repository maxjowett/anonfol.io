import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {
  render(props) {
    return (
    <div>
      {
        this.props.apiSuccess && 
          this.props.coins.data.coins.map(coin =>
            <div className="coin">
              <div className="coin__name">{coin.name}</div>
              <div className="coin__price">{coin.price}</div>
            </div>
          )
      }
    </div>
    );
  }
}

export default Coins;