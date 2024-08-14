import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';
import Cookies from 'js-cookie';

// Define the async thunk action for login
export const login = createAsyncThunk("/auth/login", async (credentials, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/login', credentials);

        // Check if response is successful
        if (response.status === 200) {
            const { token, payload } = response.data;

            // Save the payload to local storage
            localStorage.setItem('user', JSON.stringify(payload));

            // Save the token in a cookie
            Cookies.set('token', token, { expires: 1, path: '/' }); // Cookie expires in 1 day

            return response.data; // Return the entire response data
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (error) {
        const message = error.response?.data?.message || "An error occurred";
        return rejectWithValue(message);
    }
});


// Define the async thunk action for logout
export const logout = createAsyncThunk("/auth/logout", async (_, { rejectWithValue }) => {
    try {
        // Retrieve the token from cookies
        const token = Cookies.get('token');

        // If there is no token, return early
        if (!token) {
            throw new Error('No token found');
        }

        // Make the POST request to the logout endpoint with token in the headers
        const response = await axiosInstance.post('/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Check if response is successful
        if (response.status === 200) {
            // Clear local storage and remove token from cookies
            localStorage.removeItem('user');
            Cookies.remove('token');

            return response.data; // Return the entire response data
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (error) {
        const message = error.response?.data?.message || "An error occurred";
        return rejectWithValue(message);
    }
});
