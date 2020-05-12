import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>Hello my username is: {props.userName}</p>
        </div>
    );

};

export default userOutput;
