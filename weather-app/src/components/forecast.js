import React from 'react';
import moment from 'moment';

import Day from '../components/day';

const forecast = (props) => {
    const days = props.days;
    let displayDaysMap = {};
    let currentDate = days.length > 0 ? moment.unix(days[0].dt).format("MMM DD, YYYY") : moment(new Date()).format("MMM DD, YYYY");

    function extractDays(days) {
        for(var i=0; i<days.length; i++){
            let date = moment.unix(days[i].dt).format('MMMM DD, YYYY')
            let time = moment.unix(days[i].dt).format('h:mm A')
            if(moment.unix(days[i].dt).format('MMM DD, YYYY') > currentDate){
                currentDate = moment.unix(days[i].dt).format('MMM DD, YYYY');
            }
            days[i].date = date;
            days[i].time = time;
            if(!displayDaysMap[currentDate]){
                let tempArray = [];
                tempArray.push(days[i]);
                displayDaysMap[currentDate] = tempArray;
            } else {
                let temp = displayDaysMap[currentDate];
                temp.push(days[i]);
                displayDaysMap[currentDate] = temp;
            }
        }
        console.log(displayDaysMap);
    }
    let displayDays = extractDays(days);

    const forecastDays = props.days.map((day) => {
        return (
            <Day 
                key={day.dt_txt} 
                dateTime={moment.unix(day.dt).format('MMMM DD, YYYY h:mm A')}
                temperature={day.main.temp} 
                description={day.weather[0].main} 
                iconCode={day.weather[0].icon}
                className={day.weather[0].main}>
            </Day>
        )
    });
    return (
        <div className="days">
            { props.current.name ? <h1>5 Day Forecast for {props.current.name}</h1> : null}
            {forecastDays ? forecastDays : null}    
        </div>
    );
};

export default forecast;