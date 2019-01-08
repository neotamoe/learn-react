import React, { Component } from 'react';
import './App.css';
import Day from './components/day';
import Input from './components/input';
import Button from './components/button';

class App extends Component {
  state = {
    city: null,
    state: null,
    showDays: false,
  }

  render() {
    return (
      <div className="App">
          <h1 className="header">Let's make a weather app!</h1>
          <form>
            <Input labelName="City" /> 
            <Input labelName="State" /> 
            <Button type="submit" buttonText="Get Weather"></Button>
          </form>
          {this.showDays ? 
            <div className="days">
              <Day></Day>
              <Day></Day>
              <Day></Day>
              <Day></Day>
              <Day></Day>
            </div>  
          : null }
      </div>
    );
  }
}

export default App;
