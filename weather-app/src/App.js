import React, { Component } from 'react';
import './App.css';
import Day from './components/day';
import Input from './components/input';
import Button from './components/button';
import axios from 'axios';
import key from './key';

class App extends Component {
  state = {
    city: null,
    showDays: false,
    days: []
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('The button was clicked.');
    console.log('current city: '+ this.state.city);
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},us&units=imperial&mode=json&appid=${key}`).then((response) => {
      this.setState((prevState, props) => {
        return {
          showDays: !prevState.showDays,
          days: response.data.list
        }
      });
      console.log(response.data.list);
    })
  }

  handleInputChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    const forecastDays = this.state.days.map((day) =>
      <Day key={day.id} temperature={day.main.temp} description={day.weather[0].description}></Day> 
    );
    return (
      <div className="App">
          <h1 className="header">Let's make a weather app!</h1>
          <form>
            <Input labelName="City" value="" placeholder="Enter a City" handleInputChange={this.handleInputChange}/> 
            <Button type="submit" handleSubmit={this.handleSubmit} buttonText="Get Weather"></Button>
          </form>
          {this.state.showDays ? 
            <div className="days">
              {forecastDays}
            </div>
          : null }
      </div>
    );
  }
}

export default App;
