import React, { Component } from 'react';
import './App.css';
import FormExampleCaptureValues from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React Spike</h1>
          <h2>Console Log Form Inputs</h2>
        </header>
        <FormExampleCaptureValues/>
      </div>
    );
  }
}

export default App;
