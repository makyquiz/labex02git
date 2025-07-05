import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import './App.css';

export const usersRef = { current: [] };

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => {
        usersRef.current = data.data;
      });
  }, []);

  return (
    <AuthProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
