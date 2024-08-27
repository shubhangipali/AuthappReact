import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return { username: decodedToken.username, token };
    }
    return null;
  });

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials, { withCredentials: true });
      const { username, token } = response.data;
      if (token) {
        console.log('Received JWT token:', token); // Log the token for inspection
        const decodedToken = jwtDecode(token); // Use jwtDecode to decode the token
        console.log('Decoded JWT token:', decodedToken); // Inspect the decoded token
        sessionStorage.setItem('token', token);
        setUser({ username, token });
        return { username, token };
      } else {
        console.error('No token received');
        return null;
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      return null;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
      sessionStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token && !user) {
      const decodedToken = jwtDecode(token);
      setUser({ username: decodedToken.username, token });
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
