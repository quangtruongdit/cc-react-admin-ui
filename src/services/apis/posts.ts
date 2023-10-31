
/**
 * createAsyncThunk is a function from Redux Toolkit that helps you to write asynchronous logic for your Redux app.
 * It takes a string action type and a callback function that returns a promise,
 * and generates three action types based on the promise lifecycle: pending, fulfilled, and rejected.
 * You can use these action types in your reducers to handle the loading, success,
 * and error states of your async requests.
 *  */

// Define an async action that fetches posts data from the API


/**
 * createSlice is a function that simplifies creating Redux reducer functions and action
 * creators. It accepts an initial state, an object of reducer functions, and a slice name,
 * and automatically generates action types and action creators that correspond to
 * the reducers and state. It also allows you to add extra reducers that can handle actions
 * from other sources
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import IPost from '../../models/post';

// Define an async action that fetches posts data from the API
export const fetchPosts = createAsyncThunk<IPost[]>(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
);

// Define a slice for posts data
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [] as IPost[],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed', // loading state
    error: null as string | null // error state
  },
  reducers: {
    // You can add some reducers for manipulating posts data here
  },
  extraReducers: (builder) => {
    // Handle the pending state of the fetchPosts action
    builder.addCase(fetchPosts.pending, (state, _) => {
      state.status = 'loading';
    });
    // Handle the fulfilled state of the fetchPosts action
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    });
    // Handle the rejected state of the fetchPosts action
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? null;
    });
  }
});

// Export the slice reducer and selectors
export const postsReducer = postsSlice.reducer;
export const selectAllPosts = (state: { posts: { items: IPost[] } }) =>
  state.posts.items;
export const selectPostsStatus = (state: { posts: { status: string } }) =>
  state.posts.status;
export const selectPostsError = (state: { posts: { error: string | null } }) =>
  state.posts.error;
