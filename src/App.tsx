import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
