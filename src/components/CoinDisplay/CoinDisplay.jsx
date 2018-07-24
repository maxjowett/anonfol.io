import React from 'react';


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CoinDisplay = (props) => {
  return (
    props.queryResponse != null
    ?
    <div className="g-row">
      <div className="coin-display">
        <h2>{props.queryResponse.data.coins[0].name}</h2>
        <div>{props.queryResponse.data.coins[0].symbol}</div>
        <div>{props.queryResponse.data.coins[0].price.toLocaleString()}</div>
        <div>{props.queryResponse.data.coins[0].marketCap.toLocaleString()}</div>
        <div>{props.queryResponse.data.coins[0].circulatingSupply.toLocaleString()}</div>
        <div>{props.queryResponse.data.coins[0].totalSupply.toLocaleString()}</div>
        <div>{props.queryResponse.data.coins[0].description}</div>
        <div>{props.queryResponse.data.coins[0].change}</div>
      </div>
    </div>
    : null
  );
}

export default CoinDisplay;