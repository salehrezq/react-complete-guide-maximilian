import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {


    // `Persons` uses `getDerivedStateFromProps` but its initial state is undefined.
    // This is not recommended. Instead, define the initial state by assigning
    // an object to `this.state` in the constructor of `Persons`.
    // This ensures that `getDerivedStateFromProps` arguments have a consistent shape.
    // static getDerivedStateFromProps(props, state) {
    //
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('[Persons.js - update] shouldComponentUpdate');
        // compare this.props with nextProps and return boolean based on it.
        return ((nextProps.persons !== this.props.persons) ||
            (nextProps.isAuthenticated !== this.props.isAuthenticated));
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('[Persons.js - update] getSnapshotBeforeUpdate');
        return {snapshotData: 'This snapshot will be accessible in componentDidUpdate() through the third argument'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('[Persons.js - update] componentDidUpdate');
        console.log(snapshot);
    }

    // Invoked immediately before this component is unmounted and destroyed.
    // Use this hook for cleanup work
    componentWillUnmount = () => {
        console.log('[Persons.js - cleanup] componentWillUnmount');
    }

    render() {

        console.log('[Persons.js] rendering...');
        return (this.props.persons.map((person, index) => {
            return  <Person name={person.name}
                            age={person.age}
                            click={() => this.props.deleteOnClick(index)}
                            key={person.id}
                            changed={event => this.props.nameChanged(event, person.id)}
                            isAuth={this.props.isAuthenticated}
            />
        }));
    }
}

export default Persons;
