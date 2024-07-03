import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

export const PrivateRoutes = ({ user }) => {
  if (!user) {
	  return <Navigate to={ROUTER_KEYS.LOGIN} replace />;
  }
  
  return <Outlet />;
};

export const PublicRoutes = ({ user }) => {
  if (user) {
	  return <Navigate to={ROUTER_KEYS.PROFILE} replace />;
  }
	
  return <Outlet />;
};

export const ErrorRoutes = ({ error }) => {
  if (error) {
	  return <Outlet />;
  } 
};
