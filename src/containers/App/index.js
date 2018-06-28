import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { Layout } from 'antd';
import { MenuComponent } from './menu'
import { routes } from '../../routes'

const { Header, Content } = Layout;

class App extends Component {
    componentDidMount() {
      setTimeout(() => {
        window.isServer = false
      }, 0)
    }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            CRA SSR
          </title>
          <meta property="og:title" content="CRA SSR"/>
        </Helmet>
        <Header
        style={{ height: '55px' }}
        > 
         <MenuComponent />
        </Header>
        <Content style={{ background: '#fff', padding: '0 50px' }}>
        <div style={{padding: 24}}>
          {renderRoutes(routes)}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
