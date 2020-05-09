import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I am a react app</h1>
        <Person name="Saleh" age="32"/>
        <Person name="Mol" age="30">
            Child content8
        </Person>

    </div>
  );
}

export default App;
