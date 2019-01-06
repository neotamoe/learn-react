import React, { Component } from 'react';
import './App.css';
import Day from './components/day';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 class="header">Let's make a weather app!</h1>
          <div className="days">
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
          </div>
      </div>
    );
  }
}

export default App;
