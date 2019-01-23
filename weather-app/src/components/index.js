import React, { Component } from 'react';

import '../App.css';

class Index extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="header">Let's make a weather app!</h1>
        <ol>
            <li>Click on Current or Forecast</li>
            <li>Enter a city</li>    
        </ol>
      </div>
    );
  }
}

export default Index;
