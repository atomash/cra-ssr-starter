import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
    Redirect
} from 'react-router-dom'
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './index.css';

import { routes } from '../../routes'


class App extends Component {
    componentDidMount() {
      setTimeout(() => {
        window.isServer = false
      }, 0)
    }

    renderRoutes = () => {
      return routes.map(route => (
        <Route
        key={route.path} 
        exact={route.exact} 
        path={route.path} 
        component={route.component} 
        />
      ))
    }
  render() {
    return (
      <div>
        <Helmet>
          <title>
            CRA SSR
          </title>
          <meta property="og:title" content="CRA SSR"/>
        </Helmet>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <nav>
            <li>
              <Link to="/">
                home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
              <li>
                  <Link to="/red">
                      Redirect
                  </Link>
              </li>
          </nav>
        </div>
        <Switch>
            {this.renderRoutes()}
            <Route exact path="/red" render={() => (<Redirect to="/" />)} />
            <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
