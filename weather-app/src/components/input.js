import React from 'react';

const input = (props) => {

    return (
        <div className="lineup">
            <span>{props.labelName}:</span>
            <input 
                type="text"
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.handleInputChange}
                id={props.labelName}/>
        </div>
    );
}

export default input;