import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="header">
      <h1>FreepLink</h1>
      <nav>
        {user ? (
          <button onClick={handleSignOut} className="sign-out-btn">
            Sign Out
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
