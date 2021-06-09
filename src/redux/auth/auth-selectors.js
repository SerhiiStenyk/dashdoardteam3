const getIsAuthenticated = state => !!state.auth.token;
const getUserEmail = state => state.auth.user.email; //???
const getToken = state => state.auth.token; //???
const getLoading = state => state.auth.loading;
const getError = state => state.auth.error;
const isAuthenticated = state => state.auth.isAuthenticated;

console.log(
  '🚀 ~ file: auth-selectors.js ~ line 10 ~ getIsAuthenticated',
  getIsAuthenticated,
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  isAuthenticated,
  getIsAuthenticated,
  getUserEmail,
  getToken,
  getLoading,
  getError,
};
