import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation, { ModalProps } from '../components/navigation/Navigation';

function renderNavigation(props: Partial<ModalProps> = {}) {
  const defaultProps: ModalProps = {
    openLoginModal() {
      return;
    },
  };
  return render(<Navigation {...defaultProps} {...props} />);
}

describe('Navigation rendering functionality', () => {
  it('Navigation text present', () => {
    renderNavigation();
    const navigationText = screen.getByText('Recipe Vault');
    expect(navigationText).toBeInTheDocument();
  });
});
