import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
    Redirect
} from 'react-router-dom'
import Helmet from 'react-helmet';
import {asyncComponent} from 'react-async-component';
import logo from './logo.svg';
import './index.css';


const asyncHome = asyncComponent({
    resolve: () => import('../../pages/Home'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});

const asyncAbout = asyncComponent({
    resolve: () => import('../../pages/About'),
    LoadingComponent: ({ match }) => <div>Resolving {match.url}</div>
});


class App extends Component {
    componentDidMount() {
        window.isServer = false
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
            <Route exact path="/" component={asyncHome} />
            <Route exact path="/about" component={asyncAbout} />
            <Route exact path="/red" render={() => (<Redirect to="/" />)} />
            <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
