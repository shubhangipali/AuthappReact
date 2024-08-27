import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          <Route path="*" element={() => <h1>404: Page Not Found</h1>} />
          </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
