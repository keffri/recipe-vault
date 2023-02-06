import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  closeLoginModal: () => void;
}

const Login: FC<ModalProps> = (props: ModalProps) => {
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
