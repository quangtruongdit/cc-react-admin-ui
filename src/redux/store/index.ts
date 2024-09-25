import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../services/apis/posts';
import dashboardReducer from '../slices/dashboardSlice';
import { ordersApi } from '../../services/apis/orders';
import { authApi } from '../../services/apis/auth';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const isDevelopment = process.env.NODE_ENV !== 'production';

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    thunk: true, // Enable thunks if needed
    serializableCheck: false, // Disable serializable check to improve performance
  })
    .concat(sagaMiddleware)
    .concat(ordersApi.middleware)
    .concat(authApi.middleware);

// Create a Redux store with reducers
const store = configureStore({
  reducer: {
    posts: postsReducer,
    dashboard: dashboardReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware,
  devTools: isDevelopment, // Enable Redux DevTools only in development
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;