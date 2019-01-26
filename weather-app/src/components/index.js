import React, { Component } from 'react';

import '../App.css';
import Current from './current';
import Forecast from './forecast';

class Index extends Component {

  render(props) {
    console.log(this.props);
    return (
      <div className="App">
        <hr/>
        <h1 className="header">Let's make a weather app!</h1>
        <hr/>
        { this.props.showCurrent ? 
          <Current 
            city={this.props.current.name} 
            iconCode={this.props.current.weather[0].icon}
            temperature={this.props.current.main.temp.toFixed()}
            description={this.props.current.weather[0].description} /> 
          : null }
        { this.props.showCurrent ? <hr/> : null }
        { this.props.showDays ?
          <Forecast {...this.props}/>
          : null }
        { (this.props.showCurrent || this.props.showDays) ? 
          null 
          : <ol>
              <li>Enter a city and click "Get Weather" button</li>    
              <li>Click on Current or Forecast to see only current conditions OR forecast</li>
            </ol> 
        }
      </div>
    );
  }
}

export default Index;
