import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AddCoin from './components/AddCoin/AddCoin';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <AddCoin />
      </div>
    );
  }
}

export default App;
