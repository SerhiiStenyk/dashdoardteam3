import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getCards = state => state.contacts.items; //getAllCards
const getError = state => state.contacts.error;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getLoading,
  getCards,
  getError,
};