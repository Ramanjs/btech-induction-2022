import './scss/_base.scss';
import { useState } from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Navbar from './pages/Navbar';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
        <Routes>
          <Route path="/home" element={<Home isBlur={isNavExpanded}/>} />
          <Route path="/schedule" element={<Schedule isBlur={isNavExpanded}/>} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
