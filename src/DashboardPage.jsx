import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { usersRef } from './App';
import UserForm from './UserForm';
import UserCard from './UserCard';

export default function DashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="container">
      <div className="form-group">
        <h2>Dashboard</h2>
        <button onClick={() => { logout(); navigate('/'); }} className="danger">Logout</button>
      </div>

      <UserForm editingUser={editingUser} setEditingUser={setEditingUser} triggerRefresh={triggerRefresh} />

      <div className="user-grid">
        {usersRef.current.map(user => (
          <UserCard key={user.id} user={user} setEditingUser={setEditingUser} triggerRefresh={triggerRefresh} />
        ))}
      </div>
    </div>
  );
}
