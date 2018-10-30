import React, { Component } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: null,
      apiSuccess: false
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
      res.status === 'success' && that.setState({ coins: res, apiSuccess: true })
    });
  }

  
  render() {
    return (
      <div className="App">
        <Coins
          coins={this.state.coins}
          apiSuccess={this.state.apiSuccess}
        />
      </div>
    );
  }
}

export default App;
