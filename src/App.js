import React, { Suspense, lazy, useEffect } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authOperations } from './redux/auth/index';
import routes from './routes';
import './App.css';
import './fonts.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

// console.log(
//   '🚀 ~ file: App.js ~ line 10 ~ PrivateRoute',
//   PrivateRoute,
// );

// import DataTimeChelengeModal from './components/DataTimeChelengeModal';

const Landing = lazy(() =>
  import(
    './pages/Landing/Landing.js' /*webpackChunkName: "landing-page"*/
  ),
);
const CardPage = lazy(() =>
  import(
    './pages/CardPage.js' /*webpackChunkName: "card-page"*/
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFound.js' /*webpackChunkName: "notFound-page"*/
  ),
);

export default function App() {
  const disaptch = useDispatch();

  useEffect(() => {
    disaptch(authOperations.getCurrentUser());
  }, [disaptch]);

  return (
    <>
      <br />
      <br />

      <br />

      <br />

      <br />

      {/* <DataTimeChelengeModal /> */}
      <Suspense fallback={<h1>Loader...</h1>}>
        <Switch>
          {/* <Route
            exact
            path={routes.landing}
            component={Landing}
          /> */}
          {/* <Route path={routes.card} component={CardPage} /> */}

          {/* <PrivateRoute
            path={routes.card}
            exact
            redirectTo={routes.login}
          >
            <CardPage />
          </PrivateRoute> */}

          {/* <TodoCard /> */}
          {/* <Route component={NotFoundPage} /> */}
          {/* 
          <PrivateRoute
            path={routes.card}
            exact
            redirectTo={routes.landing}
          >
            <CardPage />
          </PrivateRoute> */}
          <PrivateRoute
            path={routes.card}
            component={CardPage}
            redirectTo={routes.landing}
          />

          <PublicRoute path={routes.landing} exact>
            <Landing />
          </PublicRoute>

          {/* <PublicRoute
            path={routes.login}
            exact
            redirectTo={routes.phoneBook}
            restricted
          >
            <LoginView />
          </PublicRoute> */}

          {/* <PublicRoute
            path={routes.register}
            exact
            redirectTo={routes.phoneBook}
            restricted
          >
            <RegisterView />
          </PublicRoute> */}
        </Switch>
      </Suspense>
    </>
  );
}
