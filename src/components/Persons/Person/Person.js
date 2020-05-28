import React, {Component} from 'react';
import './Person.css';
import personStyles from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';


class Person extends Component{

render() {

    console.log('[Person.js] rendering...');
    return (
        <Auxiliary>
            <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Auxiliary>
    );
};}

export default Person;
