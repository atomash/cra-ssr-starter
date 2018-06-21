import url from 'url';
import { matchRoutes } from 'react-router-config'
import { routes } from '../../src/routes'

export const PreloadDateInit = (req, store) => {
  const branch = matchRoutes(routes, req.path)
    const promises = branch.map(({ route, match }) => {
      if (match.url === url.parse(req.url).pathname && route.PreloadDate) {
          return Promise.all(
            route
              .PreloadDate(match.params)
              .map(PreloadFunction => store.dispatch(PreloadFunction))
          );
        }
        return Promise.resolve(null);
    });
    return Promise.all(promises); 
};


