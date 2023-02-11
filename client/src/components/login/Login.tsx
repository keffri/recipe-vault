import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LoginButton from './LoginButton';

type User = {
  email: string;
  name: string;
  picture: string;
};
interface LoginProps {
  closeLoginModal: () => void;
  user: User | null;
  updateUser: (user: User) => void;
}

const Login: FC<LoginProps> = (props: LoginProps) => {
  return (
    <section className="login">
      <h1 className="login__title">Login</h1>
      <button
        data-testid="button-close"
        className="login__close"
        onClick={() => props.closeLoginModal()}
      >
        <CloseIcon />
      </button>
      <LoginButton
        user={props.user}
        updateUser={props.updateUser}
        closeLoginModal={props.closeLoginModal}
      />
    </section>
  );
};

export default Login;
