// src/components/Dashboard.js

import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
