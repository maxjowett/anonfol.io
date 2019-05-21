import React, { Component } from 'react';
import Select from 'react-select';

import coins from '../../coins'

import './AddCoin.css';

class AddCoin extends Component {
  state = {
    optionSelected: null,
    amount: null
  };

  handleOnOptionChange = e => {
    // console.log(e)
    this.setState({ optionSelected: e.symbol })
  }

  handleOnAmountChange = e => {
    this.setState({ amount: e.target.value })
  }
  render() {
    return (
      <div className="add-coin">
        {/* <p>Add Coin</p> */}
        <Select className="select" options={coins} onChange={this.handleOnOptionChange} />
        <input type="text" id="add-coin__input" placeholder="Amount" onChange={this.handleOnAmountChange}/>
      </div>
    );
  }
}

export default AddCoin;