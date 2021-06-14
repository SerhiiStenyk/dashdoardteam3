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

const fetchCards = () => async dispatch => {
  dispatch(fetchAllCardsRequest());
  try {
    const { data } = await axios.get('/api/card');
    dispatch(fetchAllCardsSuccess(data.data.cards));
  } catch (error) {
    dispatch(fetchAllCardsError(error));
  }
};

// const addCards = card => dispatch => {
//   dispatch(addCardRequest());

//   axios
//     .post('/api/card', { ...card })
//     .then(({ data }) => dispatch(addCardSuccess(data)))
//     .catch(error => dispatch(addCardError(error.message)));
// };
const addCards = card => async dispatch => {
  dispatch(addCardRequest());

  try {
    const { data } = await axios.post('/api/card', {
      ...card,
    });
    dispatch(addCardSuccess(data.data.card));
  } catch (error) {
    dispatch(addCardError(error));
  }
};

// const deleteCard = cardId => dispatch => {
//   dispatch(deleteCardRequest());
//   // axios.defaults.baseURL =
//   //   'https://questify-backend.goit.global/';

//   axios
//     .delete(`/api/card/${cardId}`)
//     .then(() => dispatch(deleteCardSuccess(cardId)))
//     .catch(error =>
//       dispatch(deleteCardError(error.message)),
//     );
// };
const deleteCard = cardId => async dispatch => {
  dispatch(deleteCardRequest());

  try {
    await axios.delete(`/api/card/${cardId}`);
    dispatch(deleteCardSuccess(cardId));
  } catch (error) {
    dispatch(deleteCardError(error));
  }
};

const editCard = (cardId, card) => async dispatch => {
  dispatch(editCardRequest());

  try {
    const { data } = await axios.patch(
      `/api/card/${cardId}`,
      {
        ...card,
      },
    );
    dispatch(editCardSuccess(data.data.card));
  } catch (error) {
    dispatch(editCardError(error));
  }
};

const toggleCompleted = cardId => async dispatch => {
  const update = { status: 'Complete' };
  dispatch(toggleCompletedRequest());

  try {
    const { data } = await axios.patch(
      `/api/card/${cardId}/complete/`,
      update,
    );
    dispatch(toggleCompletedSuccess(data.data.card));
  } catch (error) {
    dispatch(toggleCompletedError(error));
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchCards,
  editCard,
  addCards,
  deleteCard,
  toggleCompleted,
};
