import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type User = {
  email: string;
  name: string;
};
interface AuthProps {
  closeAuthModal: () => void;
  user: User | null;
  updateUser: (user: User) => void;
}

const Auth: FC<AuthProps> = (props: AuthProps) => {
  return (
    <section className="auth">
      <h1 className="auth__title">auth</h1>
      <button
        data-testid="button-close"
        className="auth__close"
        onClick={() => props.closeAuthModal()}
      >
        <CloseIcon />
      </button>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
    </section>
  );
};

export default Auth;
