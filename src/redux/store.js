import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from './slices/allUsersSlices';
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
       allUsers: allUsersReducer,
    },
});

export default store;