import url from 'url';
import React from 'react';
import { matchPath } from 'react-router-dom';

import { routes } from '../../src/containers/App/routes'

const fetchDataForRender = async (req, store) => {
  const promises = [];

    await routes.some(async route => {
    const match = matchPath(url.parse(req.url).pathname, route);
    if (match) {
      route.serverComponent.then((component) => {
        const promise =
        component &&
        component.fetchData &&
        component.fetchData(store, match);
      promises.push(promise);
      return match;
      })
    }

  });
  return Promise.all(promises);
};

export default fetchDataForRender;
