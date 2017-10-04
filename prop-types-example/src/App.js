import React, { Component } from 'react';
import './App.css';
import propTypes from 'prop-types';

const Headline = () => {
  return <h1>Welcome to the React World!</h1>
}

const Greeting = (props) => {
  const {name, age} = props;
  return <p>You will love it, {name} ({age})!</p>
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Headline/>
        <Greeting name='Neota' age={25}/>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
