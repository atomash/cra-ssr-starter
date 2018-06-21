import React from 'react';
import {renderToString} from 'react-dom/server';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import renderHTMLTemplate from './template/index';
import Helmet from 'react-helmet';
import { PreloadDateInit } from './preloadDate';

async function ServerRender(req, res){
    console.log("render")
      const store = configureStore(undefined, {logger: false});
      try {
        await PreloadDateInit(req, store);
      } catch (err) {
        console.error(`==> 😭 ${err}`);
      }
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
      if (context.url){
        res.status(301).setHeader('Location', context.url);
        res.end();
        return;
    }
    
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
      });
}

export default ServerRender;
