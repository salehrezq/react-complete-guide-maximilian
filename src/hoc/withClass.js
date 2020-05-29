import React from 'react';

const withClass = (WrappedComponent, classArg) => {

    return props => (
        <div className={classArg}>
            <WrappedComponent/>
        </div>
    );
}

export default withClass;
