import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {


    static getDerivedStateFromProps(props, state) {

        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('[Persons.js - update] shouldComponentUpdate');
        // compare this.props with nextProps and return boolean based on it.
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('[Persons.js - update] getSnapshotBeforeUpdate');
        return {snapshotData: 'This snapshot will be accessible in componentDidUpdate() through the third argument'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('[Persons.js - update] componentDidUpdate');
        console.log(snapshot);
    }

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
