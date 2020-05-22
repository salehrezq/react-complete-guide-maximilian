import React from 'react';
import classes from './Cockpit.module.css';


const cockpit = props => {

    const classNames = [];
    if(props.persons.length <= 2){
        classNames.push(classes.red);
    }
    if(props.persons.length <= 1){
        classNames.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    return (
      <div className={classes.Cockpit}>
          <h1>Hi I am a React app</h1>
          <p className={classNames.join(' ')}>This is really working!</p>
          {/* Using arrow function approach - versus bind() - can cause react
                        to re-render certain things in your app too often; causes performance issues.
                        arrow function approach is not the recommended approach */}
          <button
              onClick={props.togglePersonsHandler}
              className={btnClass}>
              {props.showPersons? "Hide": "Show"}
          </button>
      </div>
    );
}

export default cockpit;
