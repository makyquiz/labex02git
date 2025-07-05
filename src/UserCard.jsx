import { usersRef } from './App';

export default function UserCard({ user, setEditingUser, triggerRefresh }) {
  const handleDelete = () => {
    usersRef.current = usersRef.current.filter(u => u.id !== user.id);
    triggerRefresh();
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <h4>{user.first_name} {user.last_name}</h4>
      <p>{user.email}</p>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setEditingUser(user)} className="warning">Edit</button>
        <button onClick={handleDelete} className="danger">Delete</button>
      </div>
    </div>
  );
}
