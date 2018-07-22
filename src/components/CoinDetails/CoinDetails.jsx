import React, { Component } from 'react';

class CoinDetails extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <div className="coin-details">
              <img src={this.props.data.data.coins[0].iconUrl} width="64"></img>
              <h2>{this.props.data.data.coins[0].name}</h2>
              <p>{this.props.data.data.coins[0].symbol}</p>
              <p>{this.props.data.data.coins[0].price}</p>
              <p>{this.props.data.data.coins[0].rank}</p>
              <p>{this.props.data.data.coins[0].marketCap}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinDetails;