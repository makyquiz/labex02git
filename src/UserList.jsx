import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import UserCard from './UserCard';
import { usersRef } from './App';

export default function UserList({ setEditingUser }) {
  const { isAuthenticated } = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
          usersRef.current = data.data;
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      usersRef.current = [];
    }
    console.log(isAuthenticated);
    console.log(count);
  }, [isAuthenticated]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {usersRef.current.map(user => (
          <UserCard key={user.id} user={user} setEditingUser={setEditingUser} />
        ))}
      </div>
    </div>
  );
}