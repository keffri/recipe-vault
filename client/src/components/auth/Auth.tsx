import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type User = {
  email: string;
};
interface AuthProps {
  closeAuthModal: () => void;
  user: User | null;
  updateUser: (user: User) => void;
}

const Auth: FC<AuthProps> = (props: AuthProps) => {
  const [loggingIn, setLoggingIn] = useState(true);
  const [authError, setAuthError] = useState(null);

  const switchAuth = (status: boolean) => {
    setAuthError(null);
    setLoggingIn(status);
  };

  return (
    <section className="auth">
      {loggingIn ? (
        <h1 className="auth__title">Login</h1>
      ) : (
        <h1 className="auth__title">Sign Up</h1>
      )}
      <button
        data-testid="button-close"
        className="auth__close"
        onClick={() => props.closeAuthModal()}
      >
        <CloseIcon />
      </button>
      <form className="auth__form">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        {!loggingIn && <input type="password" placeholder="confirm password" />}
      </form>
      {authError && <p className="auth__error">{authError}</p>}
      {loggingIn ? (
        <p className="auth_message">
          Not a member yet? Click{' '}
          <span className="auth--text" onClick={() => switchAuth(false)}>
            here
          </span>{' '}
          to sign up!
        </p>
      ) : (
        <p className="auth_message">
          Already a member? Click{' '}
          <span className="auth--text" onClick={() => switchAuth(true)}>
            here
          </span>{' '}
          to log in!
        </p>
      )}
    </section>
  );
};

export default Auth;
