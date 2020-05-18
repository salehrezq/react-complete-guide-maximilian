import React from 'react';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        // Because `style` attribute is inline rule, it takes precedence over `className` and any other rules.
        <div className="Person" style={style}>
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* You will receive a Warning because you provided a `value` prop to a form
                field without applying a `changed` prop to all <Person> components */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
