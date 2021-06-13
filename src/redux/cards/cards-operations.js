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
  dispatch(fetchAllCardsRequest());

  axios
    .get('/api/card')
    .then(({ data }) =>
      dispatch(fetchAllCardsSuccess(data)),
    )
    .catch(error =>
      dispatch(fetchAllCardsError(error.message)),
    );
};

const addCards = card => dispatch => {
  // const card = { name, number };

  dispatch(addCardRequest());

  // axios.defaults.baseURL =
  //   'https://questify-backend.goit.global/';

  axios
    .post('/api/card', { ...card })
    .then(({ data }) => dispatch(addCardSuccess(data)))
    .catch(error => dispatch(addCardError(error.message)));
};

const deleteCard = cardId => dispatch => {
  dispatch(deleteCardRequest());
  // axios.defaults.baseURL =
  //   'https://questify-backend.goit.global/';

  axios
    .delete(`/api/card/${cardId}`)
    .then(() => dispatch(deleteCardSuccess(cardId)))
    .catch(error =>
      dispatch(deleteCardError(error.message)),
    );
};

const editCard = (cardId, card) => dispatch => {
  dispatch(editCardRequest());
  // axios.defaults.baseURL =
  //   'https://questify-backend.goit.global/';

  axios
    .patch(`/api/card/${cardId}`, { ...card })
    .then(() => dispatch(editCardSuccess(cardId)))
    .catch(error => dispatch(editCardError(error.message)));
};

const toggleCompleted =
  (cardId, { status }) =>
  dispatch => {
    const update = { status };
    console.log(
      '🚀 ~ file: cards-operations.js ~ line 76 ~ update',
      update,
    );

    dispatch(toggleCompletedRequest());

    // axios.defaults.baseURL =
    //   'https://questify-backend.goit.global/';

    axios
      .patch(`/api/card/complete/${cardId}`, update)
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
