import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../components/features/Features';

test('Features being rendered to screen', () => {
  render(<Features />);
  const featuresElement = screen.getByText(/Features/i);
  expect(featuresElement).toBeInTheDocument();
});
