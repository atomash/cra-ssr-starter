import url from 'url';
import { matchPath } from 'react-router-dom';

import { Home } from '../../src/pages/Home';

const COMPONENTS_FETCH_DATA = [
  {
    path: '/',
    component: Home,
    exact: true
  }
];

const fetchDataForRender = (req, store) => {
  const promises = [];

    COMPONENTS_FETCH_DATA.some(route => {
    const match = matchPath(url.parse(req.url).pathname, route);
    if (match) {
      const promise =
        route.component &&
        route.component.fetchData &&
        route.component.fetchData(store, match);
      promises.push(promise);
    }
    return match;
  });
  return Promise.all(promises);
};

export default fetchDataForRender;
