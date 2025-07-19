import { createContext, useContext, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    let authenticatedUser = null;

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.username === username && data.password === password) {
        authenticatedUser = { username: data.username };
      }
    });

    if (authenticatedUser) {
      setUser(authenticatedUser);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
