import React, {Component, Fragment} from 'react';
import './Person.css';
import personStyles from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component{

render() {

    console.log('[Person.js] rendering...');
    return (
        <Fragment>
            <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Fragment>
    );
};}

export default withClass(Person, personStyles.Person);
