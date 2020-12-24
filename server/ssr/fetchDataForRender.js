import url from 'url';
import { matchPath } from 'react-router-dom';

import { routes } from '../../src/containers/App/routes'

const fetchDataForRender = async (req, store) => {
    let promises = [];
    const route = routes(true).filter(r => matchPath(url.parse(req.url).pathname, r))
    if(route.length) {
      // TODO: FROM [0] TO ACTUALLY ARRAY LOOP
      const component = await route[0].component;
      if(component.fetchData) {
        promises.push(component.fetchData(store))
      }
    }
    return Promise.all(promises)
};

export default fetchDataForRender;
