import React, {Component} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import appStyles from './AppStyles.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from "../hoc/Auxiliary";

class App extends Component{

    constructor(props) {

        super(props);
        console.log('[App.js - create] constructor');

        // If you want; you can define the `state` inside the constructor this way.
        // By the way; the definition of the `state` outside the `constructor()`
        // does actually happen behind the scenes inside the `constructor()`
        // this.state = {};
    }

    static getDerivedStateFromProps(props, state) {

        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    /*
    * Warning: Unsafe legacy lifecycles will not be called for components using new component APIs.
    * App uses getDerivedStateFromProps() but also contains the following legacy lifecycles:
    * componentWillMount
    * The above lifecycles should be removed. Learn more about this warning here:
    * https://fb.me/react-unsafe-component-lifecycles
    **/
    // componentWillMount() {
    //     console.log('[App.js - create] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js - create] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('[App.js - update] shouldComponentUpdate');
        // compare this.props with nextProps and return boolean based on it.
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('[App.js - update] getSnapshotBeforeUpdate');
        return {snapshotData: 'This snapshot will be accessible in componentDidUpdate() through the third argument'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('[App.js - update] componentDidUpdate');
        console.log(snapshot);
    }


    state = {
        persons: [
            // id here is dummy data, you are supposed to get unique ids from the database
            {id: 'p101', name: 'Saleh', age: 33},
            {id: 'p102', name: 'Ramy', age: 28},
            {id: 'p103', name: 'Shrod', age: 25}
        ],
        changeCounter: 0,
        showPersons: false,
        showCockpit: true
    }

    nameChangeHandler = (event, personId) => {

        // Get the index of the person from the state; the person we want to update his name.
        const personIndex = this.state.persons.findIndex(p => p.id === personId);

        // Copy the person Object from the state.
        const person = {...this.state.persons[personIndex]};
        // Alternative way of copying
        // const person = Object.assign({}, this.state.persons[personIndex]);

        // Update the name of the person; the copied person object not the original state person
        person.name = event.target.value;

        // Copy the entire persons array from the state to update it
        const persons = [...this.state.persons];
        // Update the person
        persons[personIndex] = person;

        // The wrong way to update changeCounter based on an old/previous state
        // this.setState({
        //     persons: persons,
        //     changeCounter: this.state.changeCounter + 1
        // });

        // The correct way to update changeCounter based on an old/previous state
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    }

    deletePersonHandler = personIndex => {
        // Copy this.state.persons using `splice()`
        // const persons = this.state.persons.splice();
        // Or Copy this.state.persons using the spread operator
        const persons = [...this.state.persons];
        // Now since `persons` is a copy but not a reference to the persons in the state of React.
        // Now applying the `splice()` method manipulates the copy but not the state of React
        // which is a highly recommended practice
        persons.splice(personIndex, 1);
        // Now update the state using `this.setState()` with a new data array.
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    }

    render() {

        console.log('[App.js] render');

        let persons = null;

        if(this.state.showPersons){
            persons = <Persons persons={this.state.persons}
                               deleteOnClick={this.deletePersonHandler}
                               nameChanged={this.nameChangeHandler}
            />
        }

        return (
                <Auxiliary classes="App">
                    <button
                        onClick={() => {this.setState({showCockpit: !this.state.showCockpit})}}>
                        {this.state.showCockpit? "Hide": "Show"}
                    </button>
                    {this.state.showCockpit?
                    <Cockpit
                        title={this.props.appTitle}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        togglePersonsHandler={this.togglePersonsHandler}/>: null
                    }
                    {persons}
                </Auxiliary>
        );
    }
}

export default withClass(App, 'App');
