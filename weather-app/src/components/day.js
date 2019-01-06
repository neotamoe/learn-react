import React from 'react';
import sun from '../images/sun.png';

const day = () => {
    return (
        <div className="day">
            <img src={sun} alt="sun"></img>
            <p>80&#176;</p>
            <p>Sunny</p>
        </div>
    );
};

export default day;