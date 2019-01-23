import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Index from './components/index';
import Current from './components/current';
import Input from './components/input';
import Button from './components/button';
import Error from './components/invalidCityInputError';
import Forecast from './components/forecast';
import key from './key';

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
      console.log('after axios.get in handleSubmit')
      return {
        days: response[0].data.list,
        showDays: true,
        showCurrent: true,
        current: response[1].data,
        error: false,
        city: ''
      }
    }))
    .catch(error => {
      console.log(error);
      this.setState({
        error: true,
        showDays: false,
        showCurrent: false,
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

  render () {
    const isEnabled = this.canBeSubmitted();

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/current">Current</Link>
              </li>
              <li>
                <Link to="/forecast">Forecast</Link>
              </li>
              <li>
                <Input labelName="City" value={this.state.city} placeholder="Enter a City" handleInputChange={this.handleInputChange}/> 
                <Button type="submit" handleSubmit={this.handleSubmit} disabled={!isEnabled} buttonText="Get Weather"></Button>
                {this.state.error ? <Error /> : null }
              </li>
            </ul>
          </nav>
    
          <Route path="/" exact component={Index}/>
          <Route path="/current" render={(props) => this.state.showCurrent ? 
            <Current 
              city={this.state.current.name} 
              temperature={this.state.current.main.temp.toFixed()} 
              iconCode={this.state.current.weather[0].icon}
              description={this.state.current.weather[0].main}/> : <Index /> } />
          <Route path="/forecast" render={(props) => this.state.showDays ?
            <Forecast {...this.state} /> : <Index /> } />
        </div>
      </Router>
    );
  }
}

export default App;
