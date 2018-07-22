import React, { Component } from 'react';
import './CoinDetails.css';

class CoinDetails extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="coin-details">
            <div className="one column">
              <img src={this.props.data.data.coins[0].iconUrl} width="32"></img>
            </div>
            <div className="three columns">
              <h4 id="coin-details__coin-name">{this.props.data.data.coins[0].name}</h4>
            </div>
            <div className="three columns">
              {this.props.data.data.coins[0].price}
            </div>
            <div className="two columns">
              {this.props.data.data.coins[0].rank}
            </div>
            <div className="three columns">
              {this.props.data.data.coins[0].marketCap}
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CoinDetails;