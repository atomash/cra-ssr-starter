import React from 'react';
import {renderToString} from 'react-dom/server';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import renderHTMLTemplate from './template/index';
import Helmet from 'react-helmet';
import fetchDataForRender from './fetchDataForRender';

async function reactSSRMiddleware(req, res){
      const store = configureStore(undefined, {logger: false});
      await fetchDataForRender(req, store);
      const context = {};
      const asyncContext = createAsyncContext();

      const rootElement = (
          <AsyncComponentProvider asyncContext={asyncContext}>
              <Root
                  store={store}
                  type="server"
                  url={req.url}
                  context={context}
              />
          </AsyncComponentProvider>
      );

      asyncBootstrapper(rootElement).then(() => {
              const appString = renderToString(rootElement);
              const initialState = store.getState();
              const asyncState = asyncContext.getState();
              const helmet = Helmet.renderStatic();
              res.send(renderHTMLTemplate({
                  appString,
                  initialState,
                  asyncState,
                  helmet,
                  isServer: true
              }));
    if (context.location){
      res.redirect(context.location.pathname)
    }

      });
}

export default reactSSRMiddleware;
