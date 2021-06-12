import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-backend-23.herokuapp.com/';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGM1MjI2MzhiYjU0ZjZmMTVhYjViYjUiLCJpYXQiOjE2MjM1MzIxMzEsImV4cCI6MTYyMzUzNTczMX0.HffD_HSzNso3YdH-Ui3CgqVfLJcUI6mFwXzs69ZW3io
`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  console.log('credentials',credentials);
  dispatch(authActions.registerRequest());

  try {
   const response = await axios.post('/api/users/signup', credentials)
    token.set(response.data.token)
    console.log("response.data", response.data);
    dispatch(authActions.registerSuccess(response.data))
   
  } catch (error) {
    dispatch(authActions.registerError(error.message))
  }
}

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest())

  try {
    const response = await axios.post('/api/users/login', credentials)
    token.set(response.data.token)
    // console.log('responseLogin', response);
    dispatch(authActions.loginSuccess(response.data))
  } catch (error) {
     dispatch(authActions.loginError(error.message))
  }
}

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest())

  try {
    await axios.post('/api/users/logout')
    token.unset()
    
    dispatch(authActions.logoutSuccess())
  } catch (error) {
     dispatch(authActions.logoutError(error.message))
  }
}

// const authRefresh = () => async (dispatch, getState) => {
//   const {
//     auth: { refreshToken: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return
//   }
//   еoken.set(persistedToken)
  
//   dispatch(authActions.getAuthRefreshRequest())
//   try {
//     const response = await axios.get('/auth/refresh')
//     // token.set(persistedToken)
//     dispatch(authActions.getAuthRefreshSuccess(response.data))
//   } catch (error) {
//     dispatch(authActions.getAuthRefreshError(error.message))
//   }
// }


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, login, logOut };
//, authRefresh 