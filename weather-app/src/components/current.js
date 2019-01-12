import React from 'react';

const current = (props) => {
    return (
        <div className="current">
            <h1>Current Weather : {props.city}</h1>
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"></img>
            <h2>{props.temperature}&#176;F</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default current;