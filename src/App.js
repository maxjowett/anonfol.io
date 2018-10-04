import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CoinDisplay from './components/CoinDisplay/CoinDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: null
    };
    this.callAPI = this.callAPI.bind(this);
  }

  componentWillMount() {
    this.callAPI()
  }

  callAPI() {
    fetch(`https://api.coinranking.com/v1/public/coins`)
    .then(function(resp) {
      return resp.json();
    })
    .then((res) => {
      console.log(res)
      this.setState({ coins: res.data })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <CoinDisplay />
      </div>
    );
  }
}

export default App;
