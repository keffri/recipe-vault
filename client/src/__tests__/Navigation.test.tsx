import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

type User = {
  email: string;
};

interface NavProps {
  openAuthModal: () => void;
  updateUser: (user: User) => void;
  user: User;
  removeCookie: (name: string) => void;
  authToken: any;
}

// function renderNavigation(props: Partial<NavProps> = {}) {
//   return render(<Navigation  />);
// }

function renderNavigation(props: Partial<NavProps> = {}) {
  const defaultProps: NavProps = {
    openAuthModal() {
      return;
    },
    updateUser() {
      return;
    },
    user: {
      email: 'test@email.com',
    },
    removeCookie() {
      return;
    },
    authToken: '123456',
  };

  return render(<Navigation {...defaultProps} {...props} />, {
    wrapper: MemoryRouter,
  });
}

describe('Navigation rendering functionality', () => {
  it('Navigation text present', () => {
    renderNavigation();
    const navigationText = screen.getByText('Recipe Vault');
    expect(navigationText).toBeInTheDocument();
  });
});
