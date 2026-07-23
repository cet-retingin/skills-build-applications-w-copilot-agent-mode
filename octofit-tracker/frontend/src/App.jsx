import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { getApiBaseUrl } from './utils/api';
import './App.css';

function App() {
  const apiBaseUrl = getApiBaseUrl();

  return (
    <div className="container py-4">
      <header className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src="/docs/octofitapp-small.png"
            alt="OctoFit Tracker logo"
            width="44"
            height="44"
          />
          <div>
            <h1 className="h3 mb-1">OctoFit Tracker</h1>
            <p className="text-secondary mb-0">React 19 presentation tier</p>
          </div>
        </div>

        <p className="small text-secondary mb-3">API base URL: {apiBaseUrl}</p>

        <nav className="nav nav-pills app-nav">
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
          <NavLink className="nav-link" to="/teams">
            Teams
          </NavLink>
          <NavLink className="nav-link" to="/activities">
            Activities
          </NavLink>
          <NavLink className="nav-link" to="/leaderboard">
            Leaderboard
          </NavLink>
          <NavLink className="nav-link" to="/workouts">
            Workouts
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
