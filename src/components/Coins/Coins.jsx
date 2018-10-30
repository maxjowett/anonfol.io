import React, { Component } from 'react';

class Coins extends Component {
  render(props) {
    return (
    <div>
      {
        this.props.apiSuccess && this.props.coins.data.coins.map(coin => <div>{coin.name}</div>)
      }
    </div>
    );
  }
}

export default Coins;