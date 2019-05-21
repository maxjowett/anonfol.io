import React, { Component } from 'react';
import Select from 'react-select';

import coins from '../../coins'

import './AddCoin.css';

class AddCoin extends Component {
  state = {
    optionSelected: null,
    amount: null,
    coins: []
  };

  handleOnOptionChange = e => {
    this.setState({ optionSelected: e.symbol });
  };

  handleOnAmountChange = e => {
    this.setState({ amount: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    let coin = {
      symbol: this.state.optionSelected,
      amount: this.state.amount,
      createdAt: Date.now()
    };
    if (coin) {
      this.setState({ coins: this.state.coins.concat(coin) });
    }
    console.log(coin);
  };

  render() {
    return (
      <div className="add-coin">
        {/* <p>Add Coin</p> */}
        <form onSubmit={this.handleOnSubmit}>
          <Select className="select" options={coins} onChange={this.handleOnOptionChange} />
          <input type="text" id="add-coin__input" placeholder="Amount" onChange=    {this.handleOnAmountChange} autoComplete="off"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddCoin;