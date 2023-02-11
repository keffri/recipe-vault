import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Login from './login/Login';
import LandingPage from './landingPage/LandingPage';
import Home from './home/Home';
import Features from './features/Features';

type User = {
  email: string;
  name: string;
  picture: string;
};

const App: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const updateUser = (user: User) => {
    if (user) {
      setUserCallback(user);
    }
  };

  const setUserCallback = (data: User) => {
    setUser(data);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation openLoginModal={openLoginModal} user={user} />
        {showLoginModal && (
          <Login
            closeLoginModal={closeLoginModal}
            user={user}
            updateUser={updateUser}
          />
        )}
        <Routes>
          {!user && (
            <Route
              path="/"
              element={<LandingPage openLoginModal={openLoginModal} />}
            />
          )}
          {user && <Route path="/" element={<Home user={user} />} />}
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
