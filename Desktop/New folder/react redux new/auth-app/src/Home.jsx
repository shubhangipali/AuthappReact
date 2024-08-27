import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the application.</p>
      <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
