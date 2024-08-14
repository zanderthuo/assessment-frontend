import { createSlice } from "@reduxjs/toolkit";
import { createUser, editUser, getAllUsers } from "../actions/allUsersActions";


const allUsers = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newUser = action.payload; // Save the new user data
        state.users.push(action.payload); // Optionally add new user to the list
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        state.users = state.users.map(user =>
            user.usrId === updatedUser.usrId ? updatedUser : user
        );
    })
    .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
  }
});

export default allUsers.reducer;
