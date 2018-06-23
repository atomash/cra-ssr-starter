import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './index.css';

const MOUNT = document.getElementById('root');


let initialState;
    
if (typeof window !== 'undefined' && window.INITIAL_STATE) {
    initialState = window.INITIAL_STATE;
    delete window.INITIAL_STATE;
}
const store = configureStore(initialState);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        hydrate(<Root store={store} />, MOUNT)
    });
}

