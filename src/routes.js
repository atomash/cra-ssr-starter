import Loadable from 'react-loadable';
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
    // {
    //     path: '/user/:id',
    //     component: asyncUser,
    //     PreloadData: (match) => [
    //         fetchUserByParams(match.id)
    //     ]
    // },
      
]