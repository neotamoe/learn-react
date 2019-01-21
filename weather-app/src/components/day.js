import React from 'react';

import Hour from '../components/hour';

const day = (props) => {
    const hours = props.hourForecast.map((hour) => {
        return (
            <Hour 
                key={hour.dt}
                className={hour.weather[0].main}
                time={hour.time}
                temperature={hour.main.temp}
                iconCode={hour.weather[0].icon}
                description={hour.weather[0].description}
            />
        );
    })
    return (
        <div>
            <div><h2>{props.day}</h2></div>
            {hours}
        </div>
    );
}

export default day;