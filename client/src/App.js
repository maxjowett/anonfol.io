import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {

  state = {
    coins: null
  }

  componentDidMount() {
    this.getCoins()
  }

  getCoins = () => {
    axios.get('https://api.coinranking.com/v1/public/coins')
      .then(response => {
        const { status, data } = response;
        if (status === 200) {
          this.setState({ coins: data });
        }
      })
  };

  

  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
