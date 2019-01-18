import React from 'react';
import moment from 'moment';

import Day from '../components/day';


const forecast = (props) => {
    console.log(props);
    const forecastDays = props.days.map((day) =>
        <Day 
            key={day.dt_txt} 
            dateTime={moment.unix(day.dt).format('MMMM DD, YYYY h:mm A')}
            temperature={day.main.temp} 
            description={day.weather[0].main} 
            iconCode={day.weather[0].icon}>
        </Day> 
    );
    return (
        <div className="days">
            { props.current.name ? <h1>Current Weather: {props.current.name}</h1> : null}
            {forecastDays ? forecastDays : null}
        </div>
    );
};

export default forecast;