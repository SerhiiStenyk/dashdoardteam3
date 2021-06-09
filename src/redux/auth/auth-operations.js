import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL =
  'https://questify-backend.goit.global/';

axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGMwYzg3OThiYjU0ZjZmMTVhYjU5MDUiLCJpYXQiOjE2MjMyNDY5NjksImV4cCI6MTYyMzI1MDU2OX0.A4H8F5aMcG2nApQRqmDBoWM_XWz4gFymQo7kSovdkXc';

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
      '/auth/register',
      credentials,
    );
    console.log('response.data', response);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post(
      '/auth/login',
      credentials,
    );
    // console.log('response111', response);
    token.set(response.data.token);
    // dispatch(cardsActions.getAllCardsSuccess(data.userData));
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/auth/logout');

    token.unset();
    //данные никакие не передаём, это чтобы очистить state
    // (сбросить в начальное состояние)
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, logIn, logOut };
