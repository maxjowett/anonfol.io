import React from 'react';
import './CoinDisplay.css';

const formatPrice = (str) => {
  let value = '$' + parseFloat(str).toFixed(2);
  return value;
};

const formatSymbol = (str) => {
  let value = '(' + str + ')';
  return value;
};

const formatChange = (str) => {
  let value = str + '%';
  return value;
};

const CoinDisplay = (props) => {
  return (
    props.queryObject != null &&
      <div className="g-row">
        <div className="coin-display">
          <div className="row" id="row1">
            <div className="coin-display__icon">
              <img src={props.queryObject.iconUrl} width="64" height="64" />
            </div>
            <div className="row" id="row1__1">
              <div className="coin-display__name">{props.queryObject.name}</div>
              <div className="coin-display__price">{formatPrice(props.queryObject.price)}</div>
              <div className="coin-display__symbol">{formatSymbol(props.queryObject.symbol)}</div>
              <div className="coin-display__change">{formatChange(props.queryObject.change)}</div>
            </div>
          </div>
            <br />
            <br />
            <br />
          <div className="row" id="row2">
            <div className="coin-display__rank">Rank {props.queryObject.rank}</div>
            <div className="coin-display__market-cap">Market Cap {props.queryObject.marketCap}</div>
            <div className="coin-display__volume">24hr Volume {props.queryObject.volume}</div>
          </div>
            <div className="coin-display__circulating-supply">{props.queryObject.circulatingSupply}</div>
            <div className="coin-display__total-supply">{props.queryObject.totalSupply}</div>
            <div className="coin-display__description">{props.queryObject.description}</div>
        </div>
      </div>
  );
}

export default CoinDisplay;