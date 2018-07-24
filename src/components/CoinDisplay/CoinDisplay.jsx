import React from 'react';

const CoinDisplay = (props) => {
  return (
    props.queryResponse != null
    ?
    <div className="g-row">
      <div className="coin-display">
        <h2>{props.queryResponse.data.coins[0].name}</h2>
        <div>{props.queryResponse.data.coins[0].symbol}</div>
        <div>{props.queryResponse.data.coins[0].price}</div>
        <div>{props.queryResponse.data.coins[0].marketCap}</div>
        <div>{props.queryResponse.data.coins[0].circulatingSupply}</div>
        <div>{props.queryResponse.data.coins[0].totalSupply}</div>
        <div>{props.queryResponse.data.coins[0].description}</div>
      </div>
    </div>
    : null
  );
}

export default CoinDisplay;