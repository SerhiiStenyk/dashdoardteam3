import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  addCardRequest,
  addCardSuccess,
  addCardError,
  // editCardRequest,
  // editCardSuccess,
  // editCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
} from './cards-actions';

import axios from 'axios';

console.log('axios.defaults ', axios.defaults);

console.log(
  'axios.defaults.baseURL ',
  axios.defaults.baseURL,
);

// axios.defaults.baseURL =
//   'https://questify-backend.goit.global/';

console.log(
  'axios.defaults.baseURL ',
  axios.defaults.baseURL,
);

// axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGJmNjE1MzhiYjU0ZjZmMTVhYjU4NmMiLCJpYXQiOjE2MjMxNTUwMjcsImV4cCI6MTYyMzE1ODYyN30.LbCFesovoxD5KpQmfw6lCOaFJ-gKoRzO7rRalJZ7gQ4`;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGJlNzUxNDhiYjU0ZjZmMTVhYjU4MmQiLCJzaWQiOiI2MGJmNTAwMDhiYjU0ZjZmMTVhYjU4NjQiLCJpYXQiOjE2MjMxNTA1OTIsImV4cCI6MTYyMzE1NDE5Mn0.2X7yf5I2z64LZ_dbUvwiWOn4L97-5rmd19g44BlpQxM`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const fetchCards = () => dispatch => {
  dispatch(fetchAllCardsRequest());

  axios
    .get('/card')
    .then(({ data }) =>
      dispatch(fetchAllCardsSuccess(data)),
    )
    .catch(error =>
      dispatch(fetchAllCardsError(error.message)),
    );
};

const addCards = card => dispatch => {
  // const card = { card };
  console.log(
    '🚀 ~ file: cards-operations.js ~ line 38 ~ card',
    card,
  );

  dispatch(addCardRequest());

  console.dir(axios.defaults.baseURL);

  axios.defaults.baseURL =
    'https://questify-backend.goit.global/';

  console.log('axios.defaults.baseURL ', axios.defaults);

  axios
    .post('/card', { ...card })
    .then(({ data }) => dispatch(addCardSuccess(data)))
    .catch(error => dispatch(addCardError(error.message)));
};

const deleteCard = cardId => dispatch => {
  dispatch(deleteCardRequest());

  axios
    .delete(`/card/${cardId}`)
    .then(() => dispatch(deleteCardSuccess(cardId)))
    .catch(error =>
      dispatch(deleteCardError(error.message)),
    );
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchCards,
  addCards,
  deleteCard,
};
