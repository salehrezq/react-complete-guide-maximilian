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

    switchNameHandler = (newName) => {
       this.setState({
           persons: [
               {name: newName, age: 33},
               {name: 'Ramy', age: 28},
               {name: 'Shrod', age: 10}
           ]
       });
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

        return (
            <div className="App">
                <h1>Hi I am a React app</h1>
                {/* Using arrow function approach - versus bind() - can cause react
                    to re-render certain things in your app too often; causes performance issues.
                    arrow function approach is not the recommended approach */}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>{this.state.showPersons? "Hide": "Show"}</button>

                { this.state.showPersons?
                    <div>
                        <Person name={this.state.persons[0].name}
                                age={this.state.persons[0].age}/>
                        {/* `click` and `changed` passed to <Person> are words chosen by you and can be anything */}
                        <Person click={this.switchNameHandler.bind(this, "Saleh!!!!")}
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}/>
                        <Person
                            changed={this.nameChangeHandler}
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}>
                        Child content
                        </Person>
                    </div> : null
                }

            </div>
        );
    }
}

export default App;
