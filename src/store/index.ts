import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { postsReducer } from '../services/apis/posts';

// Create a Redux store with the posts reducer
export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false // Disable serializable check for async actions
  })
});

export type AppDispatch = typeof store.dispatch;