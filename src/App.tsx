import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import UserPage from './components/UserPage/UserPage';
import UserDetailsPage from './components/UserDetailsPage/UserDetailsPage';


const App: React.FC = () => {
  
  return (
    <Router>
      <div>
        {/* Navigation */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/user/:id">users details</Link>
          </li>
        </ul>

        {/* Routes */}
        <Routes >
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/users" element={<UserPage/>} />
        <Route path="/user/:id" element={<UserDetailsPage/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
