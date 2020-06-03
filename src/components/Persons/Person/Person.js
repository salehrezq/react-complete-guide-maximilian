import React, {Component, Fragment} from 'react';
import './Person.css';
import personStyles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    // Must be named exactly like this `static contextType`
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount = () => {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

render() {

    console.log('[Person.js] rendering...');
    return (
        <Fragment>

            {/* Now the context component is accessible using this.context */}
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

            <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input
                type="text"
                // ref={(thisInputElement) => {this.inputElement = thisInputElement;}}
                ref={this.inputElementRef}
                onChange={this.props.changed}
                value={this.props.name}/>
        </Fragment>
    );
};}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, personStyles.Person);
