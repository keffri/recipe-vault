import React, { FC } from 'react';

interface ModalProps {
  closeLoginModal: () => void;
}

const Login: FC<ModalProps> = (props: ModalProps) => {
  return (
    <section className="login">
      <h1>Login</h1>
      <button className="login__close" onClick={() => props.closeLoginModal()}>
        Close
      </button>
    </section>
  );
};

export default Login;
