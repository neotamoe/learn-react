import React from 'react';

const invalidCityInputError = (props) => {
    return (
        <div className="error lineup">
            <p><strong>Invalid Input. </strong>Please enter a valid US city and try again.</p>
        </div>
    );
};

export default invalidCityInputError;