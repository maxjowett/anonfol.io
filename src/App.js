import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';

// const APIKey = process.env.REACT_APP_COINMARKETCAP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

export default App;
