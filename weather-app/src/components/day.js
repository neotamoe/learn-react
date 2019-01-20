import React from 'react';

import Hour from '../components/hour';

const day = (props) => {
    return (
        <div>
            <div>{props.day}</div>
            {/* <Hour {...props}></Hour> */}
        </div>
    );
}

export default day;