import React from 'react';
import './CoinDisplay.css';

const CoinDisplay = (props) => {
  return (
    props.queryObject != null &&
      <div className="coin-display">
        <div className="row">
            <div className="one columns">
              <img src={props.queryObject.iconUrl} width="64"></img>
            </div>
            <div className="eleven columns">
              <div className="row">
                <div className="twelve columns">
                  <div className="coin-display__name">{props.queryObject.name}</div>
                  <div className="coin-display__price">{props.queryObject.price.toLocaleString()}</div>
                </div>
            </div>
          </div>
        <div>{props.queryObject.symbol}</div>
        <div>{props.queryObject.marketCap.toLocaleString()}</div>
        <div>{props.queryObject.circulatingSupply.toLocaleString()}</div>
        <div>{props.queryObject.totalSupply.toLocaleString()}</div>
        <div>{props.queryObject.description}</div>
        <div>{props.queryObject.change}</div>
      </div>
    </div>
  );
}

export default CoinDisplay;