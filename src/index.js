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
bootstrap();
function bootstrap(){
    const store = configureStore(initialState);
    renderApplication(store, rehydrateState);
}



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
            ReactDOM.render(app, MOUNT)
        });
}