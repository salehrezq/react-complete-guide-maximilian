import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    render() {

        console.log('[Persons.js] rendering...');
        return (this.props.persons.map((person, index) => {
            return  <Person name={person.name}
                            age={person.age}
                            click={() => this.props.deleteOnClick(index)}
                            key={person.id}
                            changed={event => this.props.nameChanged(event, person.id)}/>
        }));
    }
}

export default Persons;
