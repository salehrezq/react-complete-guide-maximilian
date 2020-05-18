import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
            width: 450px;
        }
    `;

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        // Because `style` attribute is inline rule, it takes precedence over `className` and any other rules.
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click} >I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* You will receive a Warning because you provided a `value` prop to a form
                field without applying a `changed` prop to all <Person> components */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;
