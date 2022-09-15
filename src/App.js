import './scss/_base.scss';
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
        <Routes>
          <Route path="/" element={<Home isBlur={isNavExpanded}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
