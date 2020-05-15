import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

    state = {
        persons: [
            // id here is dummy data, you are supposed to get unique ids from the database
            {id: 'p101', name: 'Saleh', age: 33},
            {id: 'p102', name: 'Ramy', age: 28},
            {id: 'p103', name: 'Shrod', age: 25}
        ],
        showPersons: false
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Saleh', age: 33},
                {name: 'Ramy', age: 28},
                {name: event.target.value, age: 10}
            ]
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

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return  <Person name={person.name}
                                        age={person.age}
                                        click={() => this.deletePersonHandler(index)}
                                        key={person.id}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi I am a React app</h1>
                {/* Using arrow function approach - versus bind() - can cause react
                    to re-render certain things in your app too often; causes performance issues.
                    arrow function approach is not the recommended approach */}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>{this.state.showPersons? "Hide": "Show"}</button>
                    {persons}


            </div>
        );
    }
}

export default App;
