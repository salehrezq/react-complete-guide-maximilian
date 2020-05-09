import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

    state = {
        persons: [
            {name: 'Saleh', age: 33},
            {name: 'Ramy', age: 28},
            {name: 'Shrod', age: 25}
        ]
    }

    switchNameHandler = () => {
       this.setState({
           persons: [
               {name: 'Saleh Rezq', age: 33},
               {name: 'Ramy', age: 28},
               {name: 'Shrod', age: 10}
           ]
       });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi I am a React app</h1>
                <button onClick={this.switchNameHandler}>Switch</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                Child content
                </Person>
            </div>
        );
    }
}

export default App;
