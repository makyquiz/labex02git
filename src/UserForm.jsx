import { useState, useEffect } from 'react';
import { usersRef } from './App';

export default function UserForm({ editingUser, setEditingUser, triggerRefresh }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (editingUser) {
      setFirstName(editingUser.first_name);
      setLastName(editingUser.last_name);
      setEmail(editingUser.email);
      setAvatar(editingUser.avatar || '');
    }
  }, [editingUser]);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email) return;

    if (editingUser) {
      const index = usersRef.current.findIndex(u => u.id === editingUser.id);
      usersRef.current[index] = { ...editingUser, first_name: firstName, last_name: lastName, email };
    } else {
      usersRef.current.push({
        id: Date.now(),
        first_name: firstName,
        last_name: lastName,
        email,
        avatar,
      });
    }

    setEditingUser(null);
    setFirstName('');
    setLastName('');
    setEmail('');
    setAvatar('');
    triggerRefresh();
  };

  return (
    <div className="form-group">
      <h3>{editingUser ? 'Edit User' : 'Add User'}</h3>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={avatar} onChange={e => setAvatar(e.target.value)} placeholder="Avatar URL (optional)" />
      <button onClick={handleSubmit} className="primary">
        {editingUser ? 'Update' : 'Add'}
      </button>
    </div>
  );
}
