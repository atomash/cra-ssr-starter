import url from 'url';
import React from 'react';
import { matchPath } from 'react-router-dom';

import { routes } from '../../src/containers/App/routes'

const fetchDataForRender = async (req, store) => {
  const promises = [];

    await routes(true).some(async route => {
    const match = matchPath(url.parse(req.url).pathname, route.path);
    if (match) {
      route.component.then((component) => {
        console.log(component)
        const promise =
        component &&
        component(store, match);
      promises.push(promise);
      return match;
      })
    }

  });
  return Promise.all(promises);
};

export default fetchDataForRender;
