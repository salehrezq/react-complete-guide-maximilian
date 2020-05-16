import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    content: "",
  }

    updatedInput = (event) => {
      this.setState({content: event.target.value});
  }

  render() {
    return (
      <div className="App">
          <input type="text" onChange={event => this.updatedInput(event)} value={this.state.content}/>
          <p>{this.state.content.length}</p>
          <ValidationComponent textLength={this.state.content.length}/>
          <CharComponent/>
      </div>
    )
  }
}

export default App;
