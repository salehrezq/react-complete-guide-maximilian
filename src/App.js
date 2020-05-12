import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

    state = {
        username: "Saleh"
    }

    userNameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    render(){
        return (
            <div className="App">
                <UserInput
                    userName={this.state.username}
                    changeUsername={this.userNameChangeHandler}
                    />
                <UserOutput userName={this.state.username}/>
            </div>
        );
    }
}

export default App;
