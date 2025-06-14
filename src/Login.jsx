// components/Login.jsx
import React, { useState } from 'react';

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'admin', password: 'admin123' },
];

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (validUser) {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow">
      <h2 className="text-xl mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        className="block w-full mb-2 p-2 border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="block w-full mb-2 p-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;