import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/navigation/Navigation';

describe('Navigation rendering functionality', () => {
  it('Navigation text present', () => {
    render(<Navigation />);
    const navigationText = screen.getByText('Recipe Vault');
    expect(navigationText).toBeInTheDocument();
  });
});
