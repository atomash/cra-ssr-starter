import {asyncComponent} from 'react-async-component';
import React from 'react';

const getComponent = (component, isServer) => {
	console.log('from getComponent func', isServer)
	if(isServer) {
		return import(`../../pages/${component}`).then(c => {
			return c
		});
	} else {
		return asyncComponent({
			resolve: () => import(`../../pages/${component}`),
			LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
		})
	}
}
export const routes = (isServer) => [
		{
			path: '/',
			exact: true,
			component: getComponent('Home', isServer),
		},
		{
			path: '/about',
			exact: true,
			component: getComponent('About', isServer),
		}
	];
