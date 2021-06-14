const getLoading = state => state.cards.loading;
const getCards = state => state.cards.cards; //getAllCards
const getError = state => state.cards.error;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getLoading,
  getCards,
  getError,
};
