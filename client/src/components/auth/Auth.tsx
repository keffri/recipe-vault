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
  const [authError, setAuthError] = useState('');
  const [authInfo, setAuthInfo] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const switchAuth = (status: boolean) => {
    setAuthError('');
    setLoggingIn(status);
    setAuthInfo({
      email: '',
      password: '',
      confirm_password: '',
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLInputElement>,
    endpoint: string
  ) => {
    e.preventDefault();
    if (!loggingIn && authInfo.password !== authInfo.confirm_password) {
      setAuthError('Make sure passwords match.');
    }
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
        <input
          type="email"
          placeholder="email"
          value={authInfo.email}
          onChange={(e) => setAuthInfo({ ...authInfo, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={authInfo.password}
          onChange={(e) =>
            setAuthInfo({ ...authInfo, password: e.target.value })
          }
        />
        {!loggingIn && (
          <input
            type="password"
            placeholder="confirm password"
            value={authInfo.confirm_password}
            onChange={(e) =>
              setAuthInfo({ ...authInfo, confirm_password: e.target.value })
            }
          />
        )}
        <input
          type="submit"
          className="auth__submit"
          onClick={(e) => handleSubmit(e, loggingIn ? 'login' : 'signup')}
          value={loggingIn ? 'Log In' : 'Sign Up'}
        />
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
