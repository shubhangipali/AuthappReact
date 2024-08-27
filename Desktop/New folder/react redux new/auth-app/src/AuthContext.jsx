// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials, { withCredentials: true });
      const { username, token } = response.data;
      if (token) {
        console.log('Received JWT token:', token); // Log the token for inspection
        const decodedToken = jwtDecode(token); // Use jwtDecode to decode the token
        console.log('Decoded JWT token:', decodedToken); // Inspect the decoded token
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
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
