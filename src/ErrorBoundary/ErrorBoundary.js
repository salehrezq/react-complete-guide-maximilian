import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    /*
    * Implements method in React.ComponentLifecycle
    * */
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        /*
        * If an error occurred then `componentDidCatch()` will be called by React
        * to set `state.hasError` to `true`; then `this.state.errorMessage`
        * or whatever content you provide is shown to the user instead of
        * the erroneous component.
         */
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        } else {
            /*
            * If no errors you simply show the <ChildComponent/> of this ErrorBoundary component
            * <ErrorBoundary><ChildComponent/></ErrorBoundary>
             */
            return this.props.children;
        }
    }
}

export default ErrorBoundary;