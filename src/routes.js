import React from 'react'
import {asyncComponent} from 'react-async-component';

const asyncHome = asyncComponent({
    resolve: () => import('../../pages/Home'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

const asyncAbout = asyncComponent({
    resolve: () => import('../../pages/About'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

export const routes = [
    
]