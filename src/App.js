import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
// import { authOperations, authSelectors } from './redux/auth';
import './App.css';
import './fonts.css';
// import { connect, useDispatch } from 'react-redux';

const Landing = lazy(() =>
  import(
    './pages/Landing/Landing.js' /*webpackChunkName: "landing-page"*/
  ),
);

const LandingReg = lazy(() =>
  import(
    './pages/Landing/LandingReg.js' /*webpackChunkName: "landingReg-page"*/
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
      <>
        <Suspense fallback={<LoaderSpinner/>}>
          <Switch>
            <PublicRoute
              exact
              path={routes.landing}
              restricted
              redirectTo ={routes.card}
            >
              <Landing/>
          </PublicRoute>
          
          <PublicRoute
              exact
              path={routes.landingReg}
              restricted
              redirectTo ={routes.card}
            >
              <LandingReg/>
            </PublicRoute>
            
            <PrivateRoute
              path={routes.card}
              redirectTo={routes.landing}
            >
              <CardPage />
            </PrivateRoute>
           
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    )
};


// const App = () => (
//   <>
//     <Suspense fallback={<h1>Loader...</h1>}>
//       <Switch>
//         <Route
//           exact
//           path={routes.landing}
//           component={Landing}
//         />
//         <Route
//           path={routes.landingReg}
//           component={LandingReg}
//         />
//         <Route path={routes.card} component={CardPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </Suspense>
//   </>
// );

// export default App;