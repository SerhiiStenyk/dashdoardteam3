import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cardsReducer } from './cards';
import { authReducer } from './auth';

const myMiddleware = store => next => action => {
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
  myMiddleware,
];

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token', 'refreshToken'],
  // blacklist: ['user', 'error'],
};
const cardPersistConfig = {
  key: 'cards',
  storage,
  // whitelist: ['token', 'refreshToken'],
  // blacklist: ['user', 'error'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cards: persistReducer(cardPersistConfig, cardsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
