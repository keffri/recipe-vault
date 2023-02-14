import React, { FC } from 'react';

type User = {
  email: string;
  name: string;
  picture: string;
};

interface UserProps {
  user: User | null;
}

const Home: FC<UserProps> = (props: UserProps) => {
  return (
    <section className="home">
      <h1 className="home__title">Home</h1>
      <img
        className="home__picture"
        src={props.user!.picture}
        alt="google profile"
        referrerPolicy="no-referrer"
      />
      <p className="home__welcome">Welcome {props.user!.name}!</p>

      <div className="home__buttons">
        <button className="home__button">Create</button>
        <button className="home__button">Vault</button>
      </div>
    </section>
  );
};

export default Home;
