import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = props => {

    const btnToggleRef = useRef(null);
    // Can be named anything not restricted to `authContext`
    const authContext = useContext(AuthContext);

    // The default behavior for useEffect() is to fire the effect after every completed render.
    // Second argument of useEffect() is an array of the props you want the effect to depend on.
    // In this example; when props.persons changes then fire the effect.
    //
    // If you want to run an effect only once
    // you can pass an empty array ([]) as a second argument.
    // This tells React that your effect does not depend on any values from props or state,
    // so it never needs to re-run.
    // This isn’t handled as a special case — it follows
    // directly from how the dependencies array always works.
    useEffect(() => {
        console.log('[Cockpit.js] body useEffect');
        // Http request...
        setTimeout(() => {
            alert("Save data to cloud!");
        }, 1000);

        // cleanup function:
        return () => {
            console.log('[Cockpit.js - cleanup] useEffect');
        };
    });

    useEffect(() => {

        /**
         * We access `btnToggleRef` inside `useEffect({},[])`
         * because it is equivalent to `ComponentDidMount()` in class based components.
         * That means it runs after rendering the component, that is after executing the `return(JSX)` function
         * So that `btnToggleRef.current.click();` is called after setting the reference `ref={btnToggleRef}` inside `return(JSX)`
         *
         * That is; you cannot execute `btnToggleRef.current.click();` before setting `btnToggleRef` to reference some element.
         */
        btnToggleRef.current.click();
    },[]);

    const classNames = [];
    if(props.personsLength <= 2){
        classNames.push(classes.red);
    }
    if(props.personsLength <= 1){
        classNames.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={classNames.join(' ')}>This is really working!</p>
          {/* Using arrow function approach - versus bind() - can cause react
                        to re-render certain things in your app too often; causes performance issues.
                        arrow function approach is not the recommended approach */}
          <button
              ref={btnToggleRef}
              onClick={props.togglePersonsHandler}
              className={btnClass}>
              {props.showPersons? "Hide": "Show"}
          </button>
              <button onClick={authContext.login}>Log in</button>
      </div>
    );
}

export default React.memo(Cockpit);
