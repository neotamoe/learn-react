import React from 'react';

const hour = (props) => {
    return (
        <div className={`${props.className} day`}>
            <p>{props.time}</p>
            <hr />
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"></img>
            <p><strong>{props.temperature.toFixed()}&#176;F</strong></p>
            <p style={{fontSize: '10px'}}>{props.description}</p>
        </div>
    );
};

export default hour;