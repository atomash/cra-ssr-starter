import { matchRoutes } from 'react-router-config'
import { routes } from '../../src/routes'

export const PreloadDataInit = (req, store) => {
  const branch = matchRoutes(routes, req.path)
    const promises = branch.map(({ route, match }) => {
      if (route.PreloadData) {
          return Promise.all(
            route
              .PreloadData(match.params)
              .map(PreloadFunction => store.dispatch(PreloadFunction))
          );
        }
        return Promise.resolve(null);
    });
    return Promise.all(promises); 
};
