import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.cards.loading;
const getError = state => state.cards.error;
const getCards = state => state.cards.cards; //getAllCards

const getCompletedCards = createSelector(
  [getCards],
  cards => {
    return cards.reduce(
      (total, card) => (card.completed ? total + 1 : total),
      0,
    );
  },
);
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getLoading,
  getCards,
  getError,
  getCompletedCards,
};
