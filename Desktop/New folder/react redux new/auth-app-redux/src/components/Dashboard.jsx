import React from 'react';
import ChatScreen from './ChatScreen';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <h1>dashboard</h1>
    <Link to='/chat'>  <ChatScreen /></Link>
      <Profile/>
      <h1>Welcome, {user.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
