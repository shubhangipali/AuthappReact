import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct default import

const getSessionFromStorage = () => {
  const token = sessionStorage.getItem('token');
  console.log('Token from sessionStorage:', token); // Log token for debugging
  return {
    user: token ? jwtDecode(token).username : null,
    token: token || null,
    decodedToken: token ? jwtDecode(token) : null,
    isAuthenticated: !!token,
  };
};

const initialState = getSessionFromStorage();

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', credentials, { withCredentials: true });
    console.log('Login response:', response.data); // Log response data for debugging
    const { username, token } = response.data;
    const decodedToken = jwtDecode(token);
      console.log(decodedToken);
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
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.decodedToken = action.payload.decodedToken;
        state.isAuthenticated = true;
        state.error = null;
        console.log('Login action fulfilled:', state); // Log state for debugging
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.user = null;
        state.token = null;
        state.decodedToken = null;
        state.isAuthenticated = false;
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
