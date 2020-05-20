import React from 'react';
import './Person.css';
import personStyles from './Person.module.css';



const person = (props) => {

    // Constructing an error
    const rand = Math.random();
    if(rand > 0.7) {
       throw new Error('Something went wrong');
    }

    return (
        <div className={personStyles.Person}>
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* You will receive a Warning because you provided a `value` prop to a form
                field without applying a `changed` prop to all <Person> components */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
