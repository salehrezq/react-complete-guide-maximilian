import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    )
  }
}

export default App;
