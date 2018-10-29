import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: null
    }
    this.getCoins = this.getCoins.bind(this);
  }

  componentWillMount() {
    this.getCoins()
  }

  getCoins() {
    let that = this;
    fetch('https://api.coinranking.com/v1/public/coins')
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      res.status === 'success' && that.setState({ coins: res })
    });
  }

  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
