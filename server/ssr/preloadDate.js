import url from 'url';
import { routes } from '../../src/routes'

export const PreloadDateInit = (req, store) => {
    const promises = routes.map(route => {
      if (route.path === url.parse(req.url).pathname) {
        if (route.PreloadDate) {
          return Promise.all(
            route
              .PreloadDate(req)
              .map(item => store.dispatch(item))
          );
        }
        return Promise.resolve(null);
      }
    });
    return Promise.all(promises); 
};


