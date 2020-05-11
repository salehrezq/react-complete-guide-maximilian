import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Saleh', age: 33},
            {name: 'Ramy', age: 28},
            {name: 'Shrod', age: 25}
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);
    
   const switchNameHandler = () => {
       setPersonsState({
            persons: [
                {name: 'Saleh Rezq', age: 33},
                {name: 'Ramy', age: 28},
                {name: 'Shrod', age: 10}
            ]
        });
    }

   return (
        <div className="App">
            <h1>Hi I am a React app</h1>
            <button onClick={switchNameHandler}>Switch</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
            Child content
            </Person>
        </div>
   );

}

export default App;
