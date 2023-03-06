import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type User = {
  email: string;
  name: string;
};

interface UserProps {
  user: User | null;
}

const Home: FC<UserProps> = (props: UserProps) => {
  return (
    <section className="home">
      <h1 className="home__title">Home</h1>
      <p className="home__welcome">Welcome {props.user!.name}!</p>

      <div className="home__buttons">
        <Link to="/create">
          <button className="home__button">Create</button>
        </Link>
        <Link to="/vault">
          <button className="home__button">Vault</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
