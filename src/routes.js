import React from 'react';
import Loadable from 'react-loadable';

const Home = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */ 
    './pages/Home'),
    loading() {
      return <div>Loading...</div>
    }
  });

  const About = Loadable({
    loader: () => import(/* webpackChunkName: 'about' */
    './pages/About'),
    loading() {
      return <div>Loading...</div>
    }
  });

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        // preloadData: () => [
        //   action()
        // ]
    },
    {
        path: '/about',
        exact: true,
        component: About,
        // preloadData: () => [
        //   action()
        // ]
    },
      
]