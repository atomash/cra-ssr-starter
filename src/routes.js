import React from 'react'
import {asyncComponent} from 'react-async-component';
import { fetchUser, fetchProduct } from "./actions/index";

const asyncHome = asyncComponent({
    resolve: () => import('./pages/Home'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

const asyncAbout = asyncComponent({
    resolve: () => import('./pages/About'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

export const routes = [
    {
        path: '/',
        exact: true,
        component: asyncHome,
        PreloadDate: () => [
            fetchUser(),
            fetchProduct()
        ]
    },
    {
        path: '/about',
        exact: true,
        component: asyncAbout,
        // PreloadDate: () => [
        //     fetchUser()
        // ]
    },
]