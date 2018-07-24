import React from 'react';


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CoinDisplay = (props) => {
  return (
    props.queryObject != null
    ?
    <div className="g-row">
      <div className="coin-display">
        <h2>{props.queryObject.name}</h2>
        <div>{props.queryObject.symbol}</div>
        <div>{props.queryObject.price.toLocaleString()}</div>
        <div>{props.queryObject.marketCap.toLocaleString()}</div>
        <div>{props.queryObject.circulatingSupply.toLocaleString()}</div>
        <div>{props.queryObject.totalSupply.toLocaleString()}</div>
        <div>{props.queryObject.description}</div>
        <div>{props.queryObject.change}</div>
      </div>
    </div>
    : null
  );
}

export default CoinDisplay;