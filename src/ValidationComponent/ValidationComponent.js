import React from 'react';

const validationComponent = props => {

    const validateLengthMessage = textLength => textLength < 5? "Text too short" : "Text long enough";

    return (
      <div className="App">
        <p>{validateLengthMessage(props.textLength)}</p>
      </div>
    );
}

export default validationComponent;
