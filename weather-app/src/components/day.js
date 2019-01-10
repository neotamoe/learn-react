import React from 'react';
import sun from '../images/sun.png';

const day = (props) => {
    return (
        <div className="day">
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"></img>
            <h2>{props.temperature}&#176;F</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default day;