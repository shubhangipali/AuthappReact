import React from 'react';
import { useAuth } from './../AuthContext';

const Login = () => {
  const { user, isAuthenticated, login, logout, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(credentials);
  };
  

  return (
    <div>
      <h1>Login</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Login;
