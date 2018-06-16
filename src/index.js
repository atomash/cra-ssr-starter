import React from 'react';
import ReactDOM from 'react-dom';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import './index.css';

const MOUNT = document.getElementById('root');


let initialState,
    rehydrateState = window.ASYNC_COMPONENTS_STATE;
    if (typeof window != 'undefined' && window.INITIAL_STATE) {
        initialState = window.INITIAL_STATE;
        delete window.INITIAL_STATE;
    }
const store = configureStore(initialState);
renderApplication(store, rehydrateState);



function renderApplication(store, rehydrateState){
    const app = (
        <AsyncComponentProvider rehydrateState={rehydrateState}>
            <Root
                store={store}
            />
        </AsyncComponentProvider>
    );

    return asyncBootstrapper(app)
        .then(() => {
            ReactDOM.hydrate(app, MOUNT)
        });
}