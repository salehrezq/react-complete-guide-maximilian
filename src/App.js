import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

    state = {
        persons: [
            {name: 'Saleh', age: 33},
            {name: 'Ramy', age: 28},
            {name: 'Shrod', age: 25}
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
        const persons = this.state.persons;
        // Since `persons` is a reference to the persons in the state of React
        // applying the `splice()` method; directly manipulates the state of React
        // which is a very bad practice to do; without using `setState()`
        persons.splice(personIndex, 1);
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
                                        click={() => this.deletePersonHandler(index)}/>
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
