import url from 'url';
import { matchPath } from 'react-router-dom';

import { routes } from '../../src/containers/App/routes'

const fetchDataForRender = async (req, store) => {
  const promises = [];


    routes(true).some( async route => {
    const match = matchPath(url.parse(req.url).pathname, route.path);
    console.log(match, url.parse(req.url).pathname)
    if (match) {
      const component = await route.component
      const promise =
      component.fetchData &&
      component.fetchData(store, match);
      promises.push(promise);
      return match;
    }

  });
  console.log(promises)
  return Promise.all(promises);
};

export default fetchDataForRender;
