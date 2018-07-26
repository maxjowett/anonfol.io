import React from 'react';
import './CoinDisplay.css';

const CoinDisplay = (props) => {
  return (
    props.queryObject != null &&
      <div className="coin-display">
        <div className="row">
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
                <div className="row">
                  <div className="twelve columns">
                    <div className="coin-display__symbol">{props.queryObject.symbol}</div>
                    <div className="coin-display__change">{props.queryObject.change}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div className="row">
            <div className="four columns">
              Rank
              <br />
              <div className="coin-display__rank">{props.queryObject.rank}</div>
            </div>
            <div className="four columns">
              <div className="coin-display__marketCap">{props.queryObject.marketCap.toLocaleString()}</div>
            </div>
            <div className="four columns">
              <div className="coin-display__volume">{props.queryObject.volume.toLocaleString()}</div>
            </div>
          </div>
        <div>{props.queryObject.circulatingSupply.toLocaleString()}</div>
        <div>{props.queryObject.totalSupply.toLocaleString()}</div>
        <div>{props.queryObject.description}</div>
      </div>
    </div>
  );
}

export default CoinDisplay;