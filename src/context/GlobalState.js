import AppContext from './app-context';
import React, { useReducer } from 'react';
import { loadingReducer, SET_LOADING } from './reducers';

const GlobalState = props => {

    const [isLoading, dispatchLoading] = useReducer(loadingReducer, false);
    const showLoading = loading => { dispatchLoading({ type:  SET_LOADING, payload: loading}) };


    return (
        <AppContext.Provider
            value={{
                isLoading,
                showLoading,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default GlobalState;