import React from 'react';
import Person from './Person/Person';

// In ES6 syntax; if arrow function starts with the statement omitting the curly braces {}
// Then simply it implicitly achieves a `return` to that statement
// Multiple lines are allowed in that returned statement.
const persons = props => (props.persons.map((person, index) => {
        return  <Person name={person.name}
                        age={person.age}
                        click={() => props.deleteOnClick(index)}
                        key={person.id}
                        changed={event => props.nameChanged(event, person.id)}/>
    })
);


export default persons;
