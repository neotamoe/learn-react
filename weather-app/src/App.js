import React, { Component } from 'react';
import './App.css';
import Day from './components/day';
import Input from './components/input';
import Button from './components/button';
import axios from 'axios';
import key from './key';
import Current from './components/current';
import Error from './components/invalidCityInputError';

class App extends Component {
  state = {
    city: '',
    showDays: false,
    days: [],
    showCurrent: false,
    current: [],
    error: false
  }
 
  handleSubmit = (e) => {
    if (!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    axios.all([
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},us&units=imperial&mode=json&appid=${key}` ),
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=imperial&mode=json&appid=${key}`)
    ])
    .then(response => this.setState((prevState, props) => {
      // console.log('response0: forecast', response[0].data);
      // console.log('response1: weather', response[1].data);
      return {
        days: response[0].data.list,
        showDays: !prevState.showDays,
        showCurrent: !prevState.showCurrent,
        current: response[1].data,
        error: false
      }
    }))
    .catch(error => {
      console.log(error);
      this.setState({
        error: true
      })
    }
  )};

  handleInputChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  canBeSubmitted = () => {
    return this.state.city.length > 0;
  }

  render() {
    const forecastDays = this.state.days.map((day) =>
      <Day key={day.dt_txt} dateTime={day.dt_txt} temperature={day.main.temp} description={day.weather[0].main} iconCode={day.weather[0].icon}></Day> 
    );
    const isEnabled = this.canBeSubmitted();
    return (
      <div className="App">
          <h1 className="header">Let's make a weather app!</h1>
          <form>
            <Input labelName="City" value={this.state.city} placeholder="Enter a City" handleInputChange={this.handleInputChange}/> 
            <Button type="submit" handleSubmit={this.handleSubmit} disabled={!isEnabled} buttonText="Get Weather"></Button>
            {this.state.error ? <Error /> : null }
          </form>
          <hr style={{margin: '30px'}} />
          {this.state.showCurrent ? 
            <Current 
              city={this.state.current.name} 
              temperature={this.state.current.main.temp.toFixed()} 
              iconCode={this.state.current.weather[0].icon}
              description={this.state.current.weather[0].main}/> 
            : null }
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
