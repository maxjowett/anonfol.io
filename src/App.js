import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

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
      this.setState({ coins: res.data })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
