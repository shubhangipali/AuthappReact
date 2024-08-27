import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <h1>Welcome, {user.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
