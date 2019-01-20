import React from 'react';
import moment from 'moment';

import Hour from './hour';
import Day from './day';

const forecast = (props) => {
    const days = props.days;
    let displayDaysMap = new Map();
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
        return displayDaysMap;
    }
    let displayDays = extractDays(days);
    console.log('displayDays',displayDays)
    for(const k of displayDays.keys()){
        console.log(k);
    }

    function mapElementsToComponents(value, key, map) {
        console.log(`m[${key}] = ${value}`);
        return (<div><p>{key}</p>
        <Day>{value}</Day></div>);
    }
    // const forecastDays = props.days.map((day) => {
    //     return (
    //         <Hour 
    //             key={day.dt_txt} 
    //             dateTime={moment.unix(day.dt).format('MMMM DD, YYYY h:mm A')}
    //             temperature={day.main.temp} 
    //             description={day.weather[0].main} 
    //             iconCode={day.weather[0].icon}
    //             className={day.weather[0].main}>
    //         </Hour>
    //     )
    // });

    // const forecastDays = displayDays ? displayDays.forEach(mapElementsToComponents) : null;
    //  => {
    //     return (
    //         <Day {...props}>

    //         </Day>
            // <Hour 
            //     key={day.dt_txt} 
            //     dateTime={moment.unix(day.dt).format('MMMM DD, YYYY h:mm A')}
            //     temperature={day.main.temp} 
            //     description={day.weather[0].main} 
            //     iconCode={day.weather[0].icon}
            //     className={day.weather[0].main}>
            // </Hour>
    //     )
    // }) : null;

    return (
        <div className="days">
            { props.current.name ? <h1>5 Day Forecast for {props.current.name}</h1> : null}
            {/* {forecastDays ? forecastDays : null}     */}
        </div>
    );
};

export default forecast;