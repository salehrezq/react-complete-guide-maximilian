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

    removeChar = (index) => {
        let str = this.state.content;
        str = str.slice(0, index) + str.slice(index+1);
        this.setState({content: str});
    }

  render() {

      let charComponents = null;

      charComponents = (
                  [...this.state.content].map((charItem, index)=> {
                      return  <CharComponent charOfText={charItem}
                                             key={index}
                                             removeChar={() => this.removeChar(index)}
                      />
                  })
          );

    return (
      <div className="App">
          <input type="text" onChange={event => this.updatedInput(event)} value={this.state.content}/>
          <p>{this.state.content.length}</p>
          <ValidationComponent textLength={this.state.content.length}/>
          {charComponents}
      </div>
    )
  }
}

export default App;
