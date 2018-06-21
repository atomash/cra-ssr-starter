import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from 'containers/App';
import {StaticRouter, BrowserRouter} from 'react-router-dom';

class Root extends Component {
    render(){
        const {type, url, store, context} = this.props;

        if (type === 'server'){
            console.log("test")
            return (
                <Provider store={store}>

                  <StaticRouter
                      location={url}
                      context={context}
                  >
                      <App renderFrom="server"/>
                  </StaticRouter>
                </Provider>
            );
        }
        return (
            <Provider store={store}>
              <BrowserRouter>
                  <App renderFrom="client"/>
              </BrowserRouter>

            </Provider>
        );
    }
}

export default Root;
