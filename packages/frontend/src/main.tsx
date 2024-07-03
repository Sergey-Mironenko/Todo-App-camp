import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PortalProvider } from '@blueprintjs/core';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { HashRouter as RouteProvider } from 'react-router-dom';
import App from './modules/app/app.module';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PortalProvider portalClassName="my-custom-class">
	<RouteProvider>
	  <App/>
	</RouteProvider>
  </PortalProvider>,
);
