import React from 'react';
import {renderToString} from 'react-dom/server';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import renderHTMLTemplate from './template/index';
import Helmet from 'react-helmet';
//import fetchData from './fetchData';

async function reactSSRMiddleware(req, res){
      const store = configureStore(undefined, {logger: false});
    //   try {
    //     await fetchData(req, store);
    //   } catch (err) {
    //       console.log(err)
    //   }
      const context = {};
      const modules = [];

      const rootElement = (
        <Loadable.Capture 
        report={moduleName => modules.push(moduleName)}>
            <Root
                store={store}
                type="server"
                url={req.url}
                context={context}
            />
        </Loadable.Capture>
         
      );
      const stats = require('../../build/react-loadable.json');
      const bundles = getBundles(stats, modules);
      const appString = renderToString(rootElement);
      const initialState = store.getState();
      const helmet = Helmet.renderStatic();
        res.send(renderHTMLTemplate({
            appString,
            initialState,
            helmet,
            bundles,
            isServer: true
        }));
    if (context.location){
      res.redirect(context.location.pathname)
    }
}

export default reactSSRMiddleware;
