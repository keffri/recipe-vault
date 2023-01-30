import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
