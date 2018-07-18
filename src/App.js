import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Searchbar
        query={this.state.query}
        handleOnChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
