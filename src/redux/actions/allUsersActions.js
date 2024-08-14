import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';
import Cookies from 'js-cookie';

export const getAllUsers = createAsyncThunk('allUsers/getAllUsers', async (_, { rejectWithValue }) => {
    try {
        // Get the token from cookies
        const token = Cookies.get('token');
        
        // Set up the request payload
        const data = JSON.stringify({ token });

        // Make the request with the token in the body
        const response = await axiosInstance.post('/listAll', data);

        if (response.status === 200) {
            return response.data.payload.content; // Return the content array
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (error) {
        const message = error.response?.data?.message || 'An error occurred';
        return rejectWithValue(message);
    }
});


// Define the async thunk
export const createUser = createAsyncThunk(
    'users/createUser',
    async (userData, { rejectWithValue }) => {
      try {
        // Get the token from cookies
        const token = Cookies.get('token');
  
        // Make the request with token in the body
        const response = await axiosInstance.post('/create', {
          token: token,
          payload: userData
        });
  
        if (response.status === 200) {
          return response.data.payload; // Return the payload object
        } else {
          return rejectWithValue(response.data.message);
        }
      } catch (error) {
        const message = error.response?.data?.message || 'An error occurred';
        return rejectWithValue(message);
      }
    }
  );


  // Define the editUser action
export const editUser = createAsyncThunk(
    'users/editUser',
    async ({ token, payload }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/edit', { token, payload });

            if (response.status === 200) {
                return response.data.payload;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred';
            return rejectWithValue(message);
        }
    }
);