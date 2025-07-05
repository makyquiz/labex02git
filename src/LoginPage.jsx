import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { usersRef } from './App';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = usersRef.current.find(u => u.email === email);
    if (user && password === 'password123') {
      login();
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      </div>
      <div className="form-group">
        <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <div className="form-group">
        <button onClick={handleLogin} className="primary">Login</button>
      </div>
      {error && <p className="danger">{error}</p>}
    </div>
  );
}
