import React from 'react';

const button = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The button was clicked.');
        console.log(document.getElementById('City').value);
    }
    

    return (
        <button type={props.type} onClick={handleSubmit}>
            {props.buttonText}
        </button>
    )
};

export default button;