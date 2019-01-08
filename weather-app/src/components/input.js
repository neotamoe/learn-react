import React from 'react';

const input = (props) => {
    
    return (
        <div className="lineup">
            <span>{props.labelName}:</span>
            <input type="text" id={props.labelName}/>
        </div>
    );
}

export default input;