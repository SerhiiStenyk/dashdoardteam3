import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL =
  'https://goit-backend-23.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post(
      '/api/users/signup',
      credentials,
    );
    // console.log(response);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    //dispatch(authActions.registerError(error.message));
    if (error.response && error.response.data) {
      alert(error.response.data.message);
    }
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post(
      '/api/users/login',
      credentials,
    );
    // console.log(response);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data.message);
    }
    //dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/api/users/logout');
    token.unset();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/api/users/current');

    dispatch(
      authActions.getCurrentUserSuccess(response.data),
    );
  } catch (error) {
    dispatch(
      authActions.getCurrentUserError(error.message),
    );
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, logIn, logOut, getCurrentUser };
