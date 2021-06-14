import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const token = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {isAuthenticated || token  ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
