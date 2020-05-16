import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    userInput: "",
  }

    inputChangeHandler = (event) => {
      this.setState({userInput: event.target.value});
    }

    removeCharHandler = (index) => {
        const currentInput = this.state.userInput;
        const changedInput = currentInput.slice(0, index) + currentInput.slice(index+1);
        this.setState({userInput: changedInput});
    }

  render() {

      const charComponents = [...this.state.userInput].map((charItem, index)=> {
          return  <CharComponent charOfText={charItem}
                                 key={index}
                                 removeOnClick={() => this.removeCharHandler(index)}
          />
      });

    return (
      <div className="App">
          <input type="text"
                 // event argument is passed implicitly to `this.inputChangeHandler`
                 // Or you can write it like this {(event) => this.inputChangeHandler(event)}
                 onChange={this.inputChangeHandler}
                 value={this.state.userInput}/>
          <p>{this.state.userInput.length}</p>
          <ValidationComponent textLength={this.state.userInput.length}/>
          {charComponents}
      </div>
    )
  }
}

export default App;
