import {asyncComponent} from 'react-async-component';
import React from 'react';

const asyncHome = asyncComponent({
	resolve: () => import('../../pages/Home'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

const asyncAbout = asyncComponent({
    resolve: () => import('../../pages/About'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

export const routes = [
		{
			path: '/',
			component: asyncHome,
			serverComponent: import('../../pages/Home').then(x => x.default),
			exact: true
		},
		{
			path: '/about',
			component: asyncAbout,
			serverComponent: import('../../pages/About').then(x => x.default),
			exact: true
		}
	];
