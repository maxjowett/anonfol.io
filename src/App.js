import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queryResult: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.fetchCoinData = this.fetchCoinData.bind(this);
  }

  handleOnChange(event) {
    this.setState({ query: event.target.value });
  };

  handleOnSubmit(event) {
    event.preventDefault();
    this.fetchCoinData(this.state.query);
  };

  fetchCoinData(str) {
    let that = this;
    fetch(`https://api.coinranking.com/v1/public/coins?symbols=${str}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.setState({ queryResult: data });
    })
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default App;
