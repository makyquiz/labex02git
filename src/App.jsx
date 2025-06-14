// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          {isAuthenticated && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <button onClick={() => setIsAuthenticated(false)}>Logout</button>
            </>
          )}
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/" />
            }
          />
          <Route
            path="/about"
            element={
              isAuthenticated ? <About /> : <Navigate to="/" />
            }
          />
          <Route
            path="/contact"
            element={
              isAuthenticated ? <Contact /> : <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
