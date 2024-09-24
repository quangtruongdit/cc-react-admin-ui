import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../services/apis/posts';
import dashboardReducer from '../slices/dashboardSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// Create a Redux store with reducers
const store = configureStore({
  reducer: {
    posts: postsReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // Keep thunks if necessary
      serializableCheck: false,
    }).concat(sagaMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
});


sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;