import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import UserPage from './components/UserPage/UserPage';
import UserDetailsPage from './components/UserDetailsPage/UserDetailsPage';
import Header from './components/partials/Header';

const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  useEffect(() => {
    // Update the document title whenever the location changes
    document.title = `My App | ${location.pathname.substring(1).toUpperCase()}`;
  }, [location]);

  return (
   
      <div>
        {/* Conditionally render the Header component */}
        {!isLoginPage && <Header />}

        {/* Navigation */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/user/:id">User Details</Link>
          </li>
        </ul>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    
  );
};

export default App;
