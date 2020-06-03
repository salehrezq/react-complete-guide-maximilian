import React from 'react';

/**
 * `React.createContext()` can accept any type of value as a context value
 * In this case you don't need the default value here, because you will ultimately set actual values
 * @type {*|React.Context<{}>}
 */
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;
