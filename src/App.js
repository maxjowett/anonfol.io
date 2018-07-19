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
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let that = this;
    let query = this.state.query.toUpperCase();
    fetch(`https://api.coinmarketcap.com/v2/listings/`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.setState({
        listings: data
      });
    })
    .then(function(listings) {
      for (let i = 0; i < that.state.listings.data.length; i++) {
        if (that.state.listings.data[i].symbol == query) {
          let id = that.state.listings.data[i].id
          that.setState({ id });
        }
      }
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
