import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
import { authOperations, authSelectors } from './redux/auth';
import './App.css';
import './fonts.css';
import { connect } from 'react-redux';



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


class App extends Component {

  render() {

    return (
      <>
        <Suspense fallback={<h1>Loader...</h1>}>
          <Switch>
            
            <PublicRoute
              exact
              path={routes.landing}
              restricted
              redirectTo ={routes.card}
              component={Landing}
            />
            <PrivateRoute
              path={routes.card}
              component={CardPage}
              redirectTo={routes.landing}
              />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    )
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = (state) => ({
  getUser: authOperations.authRefresh,
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

