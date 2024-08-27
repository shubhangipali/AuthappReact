import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './AuthContext'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  return (
    <Provider store={store}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  </Provider>
  )
}

export default App
