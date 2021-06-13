import axios from 'axios';
import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  addCardRequest,
  addCardSuccess,
  addCardError,
  editCardRequest,
  editCardSuccess,
  editCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './cards-actions';

const fetchCards = () => dispatch => {
  axios.defaults.baseURL =
    'https://questify-backend.goit.global/';
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
  // const card = { name, number };
  axios.defaults.baseURL =
    'https://questify-backend.goit.global/';

  dispatch(addCardRequest());

  axios
    .post('/card', { ...card })
    .then(({ data }) => dispatch(addCardSuccess(data)))
    .catch(error => dispatch(addCardError(error.message)));
};
const deleteCard = cardId => dispatch => {
  axios.defaults.baseURL =
    'https://questify-backend.goit.global/';

  dispatch(deleteCardRequest());

  axios
    .delete(`/card/${cardId}`)
    .then(() => dispatch(deleteCardSuccess(cardId)))
    .catch(error =>
      dispatch(deleteCardError(error.message)),
    );
};

const editCard = (cardId, card) => dispatch => {
  axios.defaults.baseURL =
    'https://questify-backend.goit.global/';

  dispatch(editCardRequest());

  axios
    .patch(`/card/${cardId}`, { ...card })
    .then(() => dispatch(editCardSuccess(cardId)))
    .catch(error => dispatch(editCardError(error.message)));
};

const toggleCompleted =
  (cardId, { status }) =>
  dispatch => {
    const update = { status };

    axios.defaults.baseURL =
      'https://questify-backend.goit.global/';

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/card/complete/${cardId}`, update)
      .then(() => dispatch(toggleCompletedSuccess(cardId)))
      .catch(error =>
        dispatch(toggleCompletedError(error.message)),
      );
  };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchCards,
  editCard,
  addCards,
  deleteCard,
  toggleCompleted,
};
