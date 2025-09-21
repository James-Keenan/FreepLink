import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGitHubPages = location.pathname.includes("/FreepLink");
  const basePath = isGitHubPages ? "/FreepLink" : "";

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="header">
      <h1>FreepLink</h1>
      <nav>
        {user ? (
          <div className="header-nav">
            <Link to={`${basePath}/dashboard`} className="nav-link">
              Dashboard
            </Link>
            <Link to={`${basePath}/profile`} className="nav-link">
              Settings
            </Link>
            <button onClick={handleSignOut} className="sign-out-btn">
              Sign Out
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
