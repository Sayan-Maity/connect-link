import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard" 
import Home from './pages/home/Home';
import Support from "./pages/support/Support"
import Settings from "./pages/settings/Settings"
import Profile from './pages/profile/Profile';
import Messages from './pages/messages/Messages';
import Connection from './pages/connection/Connection';
import Promotion from './pages/promotion/Promotion';
import Integration from './pages/integration/Integration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
