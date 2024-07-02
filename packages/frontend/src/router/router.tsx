import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { PublicRoutes } from './routes';

const Router: React.FunctionComponent = () => {
  return (
	<Routes>
	  <Route element={<PublicRoutes />}>
	    <Route
		  path={ROUTER_KEYS.ALL_MATCH}
		  element={<div>Hello World</div>}
		/>
      </Route>
	</Routes>
  );
};

export default Router;
