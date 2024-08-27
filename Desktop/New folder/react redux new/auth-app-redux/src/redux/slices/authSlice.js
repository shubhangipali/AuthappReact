import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const getSessionFromStorage = () => {
  const token = sessionStorage.getItem('token');
  console.log('Token from sessionStorage:', token); // Log token from sessionStorage
  return {
    user: token ? jwtDecode(token).username : null,
    token: token || null,
    decodedToken: token ? jwtDecode(token) : null,
    isAuthenticated: !!token,
  };
};

const initialState = getSessionFromStorage();

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue, getState }) => {
  const state = getState();
  if (state.auth.loginInProgress) {
    return; // Skip login request if already in progress
  }

  try {
    const response = await axios.post('http://localhost:5000/api/login', credentials, { withCredentials: true });
    console.log('Login response:', response.data); // Log response data for debugging
    const { username, token } = response.data;
    const decodedToken = jwtDecode(token);
    sessionStorage.setItem('token', token); // Update token in sessionStorage

    return { username, token, decodedToken };
  } catch (error) {
    console.error('Login error:', error); // Log error for debugging
    return rejectWithValue(error.response.data || error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });

    sessionStorage.removeItem('token'); // Remove token from sessionStorage

    return { user: null, token: null, decodedToken: null, isAuthenticated: false };
  } catch (error) {
    console.error('Logout error:', error); // Log error for debugging
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...initialState,
    loginInProgress: false, // Add a flag to track login request progress
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginInProgress = true; // Set flag to true when login request starts
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.decodedToken = action.payload.decodedToken;
        state.isAuthenticated = true;
        state.error = null;
        state.loginInProgress = false; // Reset flag when login request completes
        console.log('Login action fulfilled:', state); // Log state for debugging
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.user = null;
        state.token = null;
        state.decodedToken = null;
        state.isAuthenticated = false;
        state.loginInProgress = false; // Reset flag when login request completes
        console.error('Login action rejected:', action.payload); // Log error for debugging
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.decodedToken = action.payload.decodedToken;
        state.isAuthenticated = action.payload.isAuthenticated;
        console.log('Logout action fulfilled:', state); // Log state for debugging
      });
  },
});

export default authSlice.reducer;
