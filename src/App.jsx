// src/App.js
import './App.css';
import { BrowserRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Article from './pages/Article';
import FormArticle from './pages/FormArticle';
import EditArticle from './pages/EditArticle';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <nav>
            <h1>My Articles</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/new">New Article</NavLink>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path="/articles/:urlId" element={<PrivateRoute><Article /></PrivateRoute>} />
            <Route path="/edit/:urlId" element={<PrivateRoute><EditArticle /></PrivateRoute>} />
            <Route path="/new" element={<PrivateRoute><FormArticle /></PrivateRoute>} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
