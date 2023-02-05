import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import LandingPage from './landingPage/LandingPage';

const App: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const modalDisplay = () => {
    setShowModal(!showModal);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation modalDisplay={modalDisplay} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage modalDisplay={modalDisplay} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
