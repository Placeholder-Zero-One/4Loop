import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';

function Sidebar() {
  const { user, isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin + '/' });
  };

  return (
    <div className="SSidebar">
      <div className="SProfile">
        {isAuthenticated && (
          <>
            <img className="SProfile-picture" src={user.picture} alt="Profile" />
            <h2 className="SUsername">@{user.name}</h2>
          </>
        )}
      </div>
      <div className="SGroup">
        <ul className="SNavigation">
          <li>
            <Link to="/me">Profile</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <div className="SKnown-languages">
          <div className="slanted-border"></div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-css-37-226088.png"
            alt="Known Languages"
            className="SKnown-languages-img"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const domain = 'mollemira.us.auth0.com';
  const clientId = 'cmBKMx5fz4Qqe6Kd40F5S8K6fXJhD3l1';
  const redirectUri = 'https://fourloop-ppmi.onrender.com/home';

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
      <Sidebar />
    </Auth0Provider>
  );
}

export default App;
