import React from 'react';

const validationComponent = props => {

    const validateLengthMessage = textLength => textLength < 5? "Text too short" : "Text long enough";

    return <div><p>{validateLengthMessage(props.textLength)}</p></div>;
}

export default validationComponent;
