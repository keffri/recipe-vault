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

test('Login modal displayed on button button click', async () => {
  renderNavigation();

  expect(screen.getByText('Recipe Vault')).toBeInTheDocument();
});
