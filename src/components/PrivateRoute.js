import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  component: Component,
  children,
  redirectTo,
  ...routerProps
}) {
  const isLoggedIn = useSelector(
    authSelectors.isAuthenticated,
  );
  console.log(
    '🚀 ~ file: PrivateRoute.js ~ line 15 ~ isLoggedIn',
    isLoggedIn,
  );

  return (
    <Route {...routerProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
