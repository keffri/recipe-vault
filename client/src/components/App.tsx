import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Auth from './auth/Auth';
import LandingPage from './landingPage/LandingPage';
import Home from './home/Home';
import Features from './features/Features';
import Create from './create/Create';
import Vault from './vault/Vault';

type User = {
  email: string;
} | null;

const App: FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  const updateUser = (user: User | null) => {
    setUserCallback(user);
  };

  const setUserCallback = (data: User) => {
    setUser(data);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation
          openAuthModal={openAuthModal}
          user={user}
          updateUser={updateUser}
        />
        {showAuthModal && (
          <Auth
            closeAuthModal={closeAuthModal}
            user={user}
            updateUser={updateUser}
          />
        )}
        <Routes>
          {!user && (
            <Route
              path="/"
              element={<LandingPage openAuthModal={openAuthModal} />}
            />
          )}
          {user && <Route path="/" element={<Home user={user} />} />}
          <Route path="/features" element={<Features />} />
          <Route path="/create" element={<Create />} />
          <Route path="/vault" element={<Vault />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
