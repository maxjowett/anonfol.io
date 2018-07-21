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
              <h2>{this.props.data.name}</h2>
              <p>{this.props.data.symbol}</p>
              <p>{this.props.data.price_usd}</p>
              <p>{this.props.data.percent_change_1h}</p>
              <p>{this.props.data.percent_change_24h}</p>
              <p>{this.props.data.percent_change_7d}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinDetails;