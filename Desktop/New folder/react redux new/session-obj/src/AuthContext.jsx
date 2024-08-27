// src/AuthContext.js

import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/slices/authSlice'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(login({ token }));
    }
  }, [dispatch]);

  const loginHandler = (credentials) => dispatch(login(credentials));
  const logoutHandler = () => dispatch(logout());

  return (
    <AuthContext.Provider value={{ ...authState, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
