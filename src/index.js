import React from 'react';
import ReactDOM from 'react-dom';
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
window.render = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(<Root store={store} />, MOUNT)
    });
}
