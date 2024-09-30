import { configureStore } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Middleware } from '@reduxjs/toolkit';
import { ordersApi } from '../../services/apis/orders';
import { authApi } from '../../services/apis/auth';
import { setError } from '../slices/errorSlice'; // Import the setError action

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';

// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware to handle RTK Query errors
const rtkQueryErrorLogger: Middleware = (storeApi) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error('We got a rejected action:', action);
    storeApi.dispatch(setError(action.error.message || 'Something went wrong'));
  }

  return next(action);
};

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    thunk: true, // Enable thunks if needed
    serializableCheck: false, // Disable serializable check to improve performance
  })
    .concat(sagaMiddleware)
    .concat(ordersApi.middleware)
    .concat(authApi.middleware)
    .concat(rtkQueryErrorLogger); // Adding the error logger middleware

// Create a Redux store with reducers
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: isDevelopment, // Enable Redux DevTools only in development
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;