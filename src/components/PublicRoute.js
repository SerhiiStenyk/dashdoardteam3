import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  redirectTo,
  children,
  ...routeProps
}) {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const token = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {token && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
