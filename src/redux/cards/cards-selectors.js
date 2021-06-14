const getLoading = state => state.cards.loading;
const getError = state => state.cards.error;
const getCards = state => state.cards.cards; //getAllCards

export default {
  getLoading,
  getCards,
  getError,
};
