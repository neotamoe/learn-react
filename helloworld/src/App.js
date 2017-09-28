import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, React!</h1>
        </header>
        <p className="App-intro">
          Hello React World from Neota!
        </p>
        <p className="App-intro">
          And hello again!
        </p>
        <p className="App-intro">
          And again!
        </p>
      </div>
    );
  }
}

export default App;
