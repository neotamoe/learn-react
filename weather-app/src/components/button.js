import React from 'react';

const button = (props) => {    

    return (
        <button type={props.type} onClick={props.handleSubmit}>
            {props.buttonText}
        </button>
    )
};

export default button;