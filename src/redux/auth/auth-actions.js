import { createAction } from '@reduxjs/toolkit';


const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

// const getAuthRefreshRequest = createAction('auth/getAuthRefreshRequest');
// const getAuthRefreshSuccess = createAction('auth/getAuthRefreshSuccess');
// const getAuthRefreshError = createAction('auth/getAuthRefreshError');

const clearError = createAction('auth/clearError');

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  clearError,
  // getAuthRefreshRequest,
  // getAuthRefreshSuccess,
  // getAuthRefreshError

};