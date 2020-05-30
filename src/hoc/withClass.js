import React from 'react';

const withClass = (WrappedComponent, classArg) => {

    return props => (
        <div className={classArg}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClass;
