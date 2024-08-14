import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../actions/authActions'; // Adjust the path if necessary

const initialState = {
  user: {},       // To store the user data after login
  token: null,    // To store the authentication token
  loading: false, // To track the loading state
  error: null,    // To store any error messages
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true; // Set loading to true when login is in progress
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when login succeeds
        state.user = action.payload.payload; // Store the user data from the payload
        state.token = action.payload.token; // Store the token
        state.error = null; // Clear any previous errors
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false; // Set loading to false when login fails
        state.user = {}; // Clear user data on failure
        state.token = null; // Clear token on failure
        state.error = action.payload || action.error.message; // Store the error message
      })
      .addCase(logout.pending, state => {
        state.loading = true; // Set loading to true when logout is in progress
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when logout succeeds
        state.user = {}; // Clear user data on logout
        state.error = null; // Clear any previous errors
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false; // Set loading to false when logout fails
        state.error = action.payload || action.error.message; // Store the error message
      });
  },
});

export default authSlice.reducer;
