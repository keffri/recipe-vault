import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Login from './login/Login';
import LandingPage from './landingPage/LandingPage';

const App: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation openLoginModal={openLoginModal} />
        {showLoginModal && <Login closeLoginModal={closeLoginModal} />}
        <Routes>
          <Route
            path="/"
            element={<LandingPage openLoginModal={openLoginModal} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
