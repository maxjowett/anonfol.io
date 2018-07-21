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
              <h2>Test!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinDetails;