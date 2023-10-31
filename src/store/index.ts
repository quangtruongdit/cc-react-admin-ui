import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../services/apis/posts';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';

// Create a Redux store with the posts reducer
export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;