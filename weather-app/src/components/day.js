import React from 'react';
import sun from '../images/sun.png';

const day = (props) => {
    return (
        <div className="day">
            <img src={sun} alt="sun"></img>
            <p>{props.temperature}&#176;</p>
            <p>{props.description}</p>
        </div>
    );
};

export default day;