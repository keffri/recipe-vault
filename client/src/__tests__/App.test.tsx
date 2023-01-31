import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('LandingPage component being rendered to screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello landing page!/i);
  expect(linkElement).toBeInTheDocument();
});
