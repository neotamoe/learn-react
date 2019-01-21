import React from 'react';
import moment from 'moment';

import Day from './day';

const forecast = (props) => {
    const days = props.days;
    let displayDaysMap = new Map();
    let currentDate = days.length > 0 ? moment.unix(days[0].dt).format("MMM DD, YYYY") : moment(new Date()).format("MMM DD, YYYY");
    
    //TODO: turn this into a class component and put the loop into componentDidMount ???
    for(var i=0; i<days.length; i++){
        let date = moment.unix(days[i].dt).format('MMMM DD, YYYY')
        let time = moment.unix(days[i].dt).format('h:mm A')
        if(moment.unix(days[i].dt).format('MMM DD, YYYY') > currentDate){
            currentDate = moment.unix(days[i].dt).format('MMM DD, YYYY');
        }
        days[i].date = date;
        days[i].time = time;
        if(!displayDaysMap.has(currentDate)){
            let tempArray = [];
            tempArray.push(days[i]);
            displayDaysMap.set(currentDate, tempArray);
        } else {
            let temp = displayDaysMap.get(currentDate);
            temp.push(days[i]);
            displayDaysMap.set(currentDate, temp);
        }
    }
    console.log('displayDaysMap',displayDaysMap);

    const forecastDays = [...displayDaysMap].map(([key, value]) => {
        return <Day day={key} key={key} hourForecast={value} />
    });
    

    return (
        <div className="days">
            { props.current.name ? <h1>5 Day Forecast for {props.current.name}</h1> : null}

            {forecastDays}
        </div>
    );
};

export default forecast;