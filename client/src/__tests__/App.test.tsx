import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('Navigation and LandingPage components being rendered to screen', () => {
  render(<App />);
  const navElement = screen.getByText(/Features/i);
  const landingElement = screen.getByText(/Tag/i);
  expect(navElement).toBeInTheDocument();
  expect(landingElement).toBeInTheDocument();
});
