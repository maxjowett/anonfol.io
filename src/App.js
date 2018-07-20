import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import CoinDisplay from './components/CoinDisplay/CoinDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      listings: null,
      id: '',
      coin: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMarket = this.getMarket.bind(this);
    this.getId = this.getId.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.getMarket();
  };

  getMarket() {
    let that = this;
    fetch('https://api.coinmarketcap.com/v2/listings/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.setState({
        listings: data
      }, () => { that.getId() });
    })
  };

  getId() {
    let that = this;
    let query = that.state.query.toUpperCase();
    for (let i = 0; i < that.state.listings.data.length; i++) {
      if (that.state.listings.data[i].symbol == query) {
        that.setState({
          id: that.state.listings.data[i].id
        }, () => { this.getCoin() });
      }
    }
  };

  getCoin() {
    let that = this;
    fetch(`https://cors-anywhere.herokuapp.com/http://api.coinmarketcap.com/v2/ticker/${this.state.id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.setState({
        coin: data.data
      });
    })
  };

  render() {
    return (
      <div className="App">
        <Searchbar
        query={this.state.query}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        <CoinDisplay
        query={this.state.query}
        coin={this.state.coin}
        />
      </div>
    );
  }
}

export default App;
