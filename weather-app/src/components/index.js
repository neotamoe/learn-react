import React, { Component } from 'react';

import '../App.css';

class Index extends Component {

  canBeSubmitted = () => {
    return this.state.city.length > 0;
  }

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
