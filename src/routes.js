import Loadable from 'react-loadable';
import { NotFound } from './pages/NotFound'
import { fetchUser, fetchProduct } from "./actions/index";

const Home = Loadable({
    loader: () => import(/* webpackChunkName: 'home' */ 
    './pages/Home'),
    loading: () => null,
    modules: ['./pages/Home']
  });

  const About = Loadable({
    loader: () => import(/* webpackChunkName: 'about' */
    './pages/About'),
    loading: () => null,
    modules: ['./pages/About']
  });

  const TestRedirects = Loadable({
    loader: () => import(/* webpackChunkName: 'testredirect' */
    './pages/TestRedirect'),
    loading: () => null,
    modules: ['./pages/TestRedirect']
  });

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        PreloadData: () => [
          fetchUser(),
          fetchProduct()
      ]
    },
    {
        path: '/about',
        exact: true,
        component: About,
        // PreloadData: () => [
        //     fetchUser()
        // ]
    },
    {
        path: '/red',
        component: TestRedirects,
    },
    // {
    //     path: '/user/:id',
    //     component: asyncUser,
    //     PreloadData: (match) => [
    //         fetchUserByParams(match.id)
    //     ]
    // },
    {
        component: NotFound,
    }
]