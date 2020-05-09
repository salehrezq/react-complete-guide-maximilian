import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    render() {
        return (
            <div className="App">
                <h1>Hi I am a react app</h1>
                <Person name="Saleh" age="32"/>
                <Person name="Mol" age="30">
                    Child content
                </Person>
            </div>
        );
    }
}

export default App;
