import React from 'react';

const userInput = (props) => {

    const inputSyle = {
        border: '2px solid red'
    };

    return (
        <div>
            <input
                type="text"
                style={inputSyle}
                onChange={props.changeUsername}
                value={props.userName} />
        </div>
    );
}

export default userInput;
