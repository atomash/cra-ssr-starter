import React from 'react';
import ReactDOM from 'react-dom';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import './index.css';

const MOUNT = document.getElementById('root');


let initialState = window.INITIAL_STATE,
    rehydrateState = window.ASYNC_COMPONENTS_STATE;
<<<<<<< HEAD

=======
>>>>>>> e2c9f1a10e7508ebf5d2a829c856d1f063f1067f
const store = configureStore(initialState);
renderApplication(store, rehydrateState);


<<<<<<< HEAD
=======

>>>>>>> e2c9f1a10e7508ebf5d2a829c856d1f063f1067f
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