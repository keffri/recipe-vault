import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type User = {
  email: string;
  name: string;
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
    </section>
  );
};

export default Login;
