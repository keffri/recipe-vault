import React, { FC } from 'react';
import { Google } from '@mui/icons-material';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginButton: FC = () => {
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
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <button className="loginButton" onClick={() => login()}>
      <p className="loginButton__text">Continue with Google</p>
      <Google />
    </button>
  );
};

export default LoginButton;
