import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  clearError,
} from './cards-actions';

const cards = createReducer([], {
  //actions.addContact.type вычисляемые свойства объекта(приведётся к строке и подставится свойство type )
  [fetchAllCardsSuccess]: (_, { payload }) => payload,
  [addCardSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editCardSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload.id),
    payload,
  ],
});

const loading = createReducer(false, {
  [fetchAllCardsRequest]: () => true,
  [fetchAllCardsSuccess]: () => false,
  [fetchAllCardsError]: () => false,

  [addCardRequest]: () => true,
  [addCardSuccess]: () => false,
  [addCardError]: () => false,

  [deleteCardRequest]: () => true,
  [deleteCardSuccess]: () => false,
  [deleteCardError]: () => false,

  [editCardRequest]: () => true,
  [editCardSuccess]: () => false,
  [editCardError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchAllCardsError]: setError,
  [addCardError]: setError,
  [deleteCardError]: setError,
  [editCardError]: setError,
  [clearError]: () => null,
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default combineReducers({
  cards,
  loading,
  error,
});
