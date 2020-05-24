import React, {Component} from 'react';
import './Person.css';
import personStyles from './Person.module.css';


class Person extends Component{

render() {

    console.log('[Person.js] rendering...');
    return (
        <div className={personStyles.Person}>
            <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            {/* You will receive a Warning because you provided a `value` prop to a form
                field without applying a `changed` prop to all <Person> components */}
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    );
};}

export default Person;
