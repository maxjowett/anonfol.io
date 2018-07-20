import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CoinData from './components/CoinData/CoinData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      coin: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.runFetch = this.runFetch.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      query: event.target.value
    });
  };

  handleOnSubmit(event) {
    event.preventDefault();
    this.runFetch(this.state.query)
  };

  runFetch(ticker) {
    let that = this;
    fetch()
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      that.setState({
        coin: data
      });
    })
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <CoinData
          coin={this.state.coin}
        />
      </div>
    );
  }
}

export default App;
