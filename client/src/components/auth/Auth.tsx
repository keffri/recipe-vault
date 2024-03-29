import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type User = {
  email: string;
};
interface AuthProps {
  closeAuthModal: () => void;
  user: User;
  updateUser: (user: User) => void;
  cookies: { [x: string]: any };
  setCookie: (name: string, value: any) => void;
}

type ValidationError = {
  body: string;
  msg: string;
  param: string;
  value: string;
};

const Auth: FC<AuthProps> = (props: AuthProps) => {
  const [loggingIn, setLoggingIn] = useState(true);
  const [authError, setAuthError] = useState('');
  const [authInfo, setAuthInfo] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const [emailError, setEmailError] = useState<ValidationError[]>([]);
  const [passwordError, setPasswordError] = useState<ValidationError[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    ValidationError[]
  >([]);

  const switchAuth = (status: boolean) => {
    setAuthError('');
    setLoggingIn(status);
    setAuthInfo({
      email: '',
      password: '',
      confirm_password: '',
    });
  };

  const filterErrors = (errors: ValidationError[], paramName: string) => {
    return errors.filter((error: ValidationError) => error.param === paramName);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLInputElement>,
    endpoint: string
  ) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/${endpoint}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...authInfo }),
      }
    );

    const data = await response.json();

    if (data.errors) {
      setEmailError(filterErrors(data.errors, 'email'));
      setPasswordError(filterErrors(data.errors, 'password'));
      setConfirmPasswordError(filterErrors(data.errors, 'confirm_password'));

      return;
    } else {
      console.log('success');
    }

    if (data.detail) {
      setAuthError(data.detail);
    } else {
      props.updateUser((props.user.email = data.email));
      props.setCookie('Email', data.email);
      props.setCookie('AuthToken', data.token);
      props.closeAuthModal();
      window.location.reload();
    }
  };

  return (
    <section className="auth">
      {loggingIn ? (
        <h1 className="auth__title">Login</h1>
      ) : (
        <h1 className="auth__title">Sign-Up</h1>
      )}
      <button
        data-testid="button-close"
        className="auth__close"
        onClick={() => props.closeAuthModal()}
      >
        <CloseIcon />
      </button>
      <form className="auth__form">
        <label htmlFor="email">Email:</label>
        {emailError.length > 0 && emailError[0].msg && (
          <p className="auth__error">
            {emailError[0].msg === 'Invalid value'
              ? 'Please enter a valid email address.'
              : emailError[0].msg}
          </p>
        )}
        {authError === 'Email does not exist.' && (
          <p className="auth__error">{authError}</p>
        )}
        <input
          type="email"
          value={authInfo.email}
          onChange={(e) => setAuthInfo({ ...authInfo, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        {passwordError.length > 0 && passwordError[0].msg && (
          <p className="auth__error">{passwordError[0].msg}</p>
        )}
        {authError === 'Incorrect password.' && (
          <p className="auth__error">{authError}</p>
        )}
        <input
          type="password"
          value={authInfo.password}
          onChange={(e) =>
            setAuthInfo({ ...authInfo, password: e.target.value })
          }
          autoComplete="off"
        />
        {!loggingIn && (
          <div className="auth__div">
            <label htmlFor="confirm_password">Confirm password:</label>
            {confirmPasswordError.length > 0 && confirmPasswordError[0].msg && (
              <p className="auth__error">{confirmPasswordError[0].msg}</p>
            )}

            <input
              type="password"
              value={authInfo.confirm_password}
              onChange={(e) =>
                setAuthInfo({ ...authInfo, confirm_password: e.target.value })
              }
              autoComplete="off"
            />
          </div>
        )}
        <input
          type="submit"
          className="auth__submit"
          onClick={(e) => handleSubmit(e, loggingIn ? 'login' : 'signup')}
          value={loggingIn ? 'Log In' : 'Sign Up'}
        />
      </form>

      {loggingIn ? (
        <p className="auth_message">
          Not a member yet? Click{' '}
          <span
            data-testid="form_switch"
            className="auth--text"
            onClick={() => switchAuth(false)}
          >
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
