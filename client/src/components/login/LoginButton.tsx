import React, { FC } from 'react';
import { Google } from '@mui/icons-material';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

type User = {
  email: string;
  name: string;
  picture: string;
};

interface LoginProps {
  user: User | null;
  updateUser: (user: User) => void;
  closeLoginModal: () => void;
}

const LoginButton: FC<LoginProps> = (props: LoginProps) => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(data);
        let userData = {
          email: data.data.email,
          name: data.data.name,
          picture: data.data.email,
        };
        props.updateUser(userData);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <button
      className="loginButton"
      onClick={() => {
        props.closeLoginModal();
        login();
      }}
    >
      <Google />
      <p className="loginButton__text">Continue with Google</p>
    </button>
  );
};

export default LoginButton;
