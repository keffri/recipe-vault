import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navigation from './navigation/Navigation';
import Auth from './auth/Auth';
import LandingPage from './landingPage/LandingPage';
import Home from './home/Home';
import Features from './features/Features';
import Create from './create/Create';
import Vault from './vault/Vault';

type User = {
  email: string;
};

const App: FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User>({ email: '' });
  const [cookies, setCookie, removeCookie] = useCookies(undefined);
  const authToken: string = cookies.AuthToken;
  const userEmail: string = cookies.Email;

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  const updateUser = (user: User) => {
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
          removeCookie={removeCookie}
          authToken={authToken}
        />
        {showAuthModal && (
          <Auth
            closeAuthModal={closeAuthModal}
            user={user}
            updateUser={updateUser}
            cookies={cookies}
            setCookie={setCookie}
          />
        )}
        <Routes>
          {!authToken && (
            <Route
              path="/"
              element={<LandingPage openAuthModal={openAuthModal} />}
            />
          )}
          {authToken && (
            <Route
              path="/"
              element={<Home user={user} userEmail={userEmail} />}
            />
          )}
          <Route path="/features" element={<Features />} />
          <Route path="/create" element={<Create />} />
          <Route path="/vault" element={<Vault />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
