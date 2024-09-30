import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from '../slices/dashboardSlice';
import { postsReducer } from '../../services/apis/posts';
import errorReducer from '../slices/errorSlice';
import { ordersApi } from '../../services/apis/orders';
import { authApi } from '../../services/apis/auth';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    posts: postsReducer,
    error: errorReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;