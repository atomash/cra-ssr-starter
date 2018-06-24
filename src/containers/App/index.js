import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';

import { HeaderComponent } from './header'
import { routes } from '../../routes'

class App extends Component {
    componentDidMount() {
      setTimeout(() => {
        window.isServer = false
      }, 0)
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
        <HeaderComponent />
       {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
