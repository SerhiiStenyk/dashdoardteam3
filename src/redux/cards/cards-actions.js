import { createAction } from '@reduxjs/toolkit';

export const fetchAllCardsRequest = createAction(
  'cards/fetchAllCardsRequest',
);
export const fetchAllCardsSuccess = createAction(
  'cards/fetchAllCardsSuccess',
);
export const fetchAllCardsError = createAction(
  'cards/fetchAllCardsError',
);

export const addCardRequest = createAction(
  'cards/addCardRequest',
);
export const addCardSuccess = createAction(
  'cards/addCardSuccess',
);
export const addCardError = createAction(
  'cards/addCardError',
);

export const editCardRequest = createAction(
  'cards/editCardRequest',
);
export const editCardSuccess = createAction(
  'cards/editCardSuccess',
);
export const editCardError = createAction(
  'cards/editCardError',
);

export const deleteCardRequest = createAction(
  'cards/deleteCardRequest',
);
export const deleteCardSuccess = createAction(
  'cards/deleteCardSuccess',
);
export const deleteCardError = createAction(
  'cards/deleteCardError',
);

export const toggleCompletedRequest = createAction(
  'cards/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'cards/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction(
  'cards/toggleCompletedError',
);

export const clearError = createAction('cards/clearError');
