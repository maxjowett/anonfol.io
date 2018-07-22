import React, { Component } from 'react';
// import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SearchBar from './components/SearchBar/SearchBar';
import CoinDetails from './components/CoinDetails/CoinDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandingPageVisible: false,
      query: '',
      data: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleOnChange(event) {
    this.setState({ query: event.target.value });
  };

  handleOnSubmit(event) {
    event.preventDefault();
    this.fetchData(this.state.query);
    event.target.reset();
  }

  fetchData(str) {
    let that = this;
    fetch(`https://api.coinranking.com/v1/public/coins?symbols=${str}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      that.setState({ data });
    })
  };


  render() {
    return (
      <div className="App" >
        { this.state.isLandingPageVisible ? <LandingPage /> : null }
        <SearchBar
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        { this.state.data !== null
        ? <CoinDetails
            data={this.state.data}
          />
        : null
        }
      </div>
    );
  }
}

export default App;
