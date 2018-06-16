import {asyncComponent} from 'react-async-component';
import React from 'react';

const getComponent = (component, isServer) => {
	console.log('from getComponent func', isServer)
	if(isServer) {
		return import(`../../pages/${component}`);
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
			component: getComponent('Home', isServer),
			exact: true
		},
		{
			path: '/about',
			component: getComponent('About', isServer),
			exact: true
		}
	];
