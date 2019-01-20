import React from 'react';

const hour = (props) => {
    return (
        <div className={`${props.className} day`}>
            <p>{props.dateTime}</p>
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"></img>
            <h2>{props.temperature.toFixed()}&#176;F</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default hour;