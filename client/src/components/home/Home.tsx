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
      <p>Welcome {props.user!.name}!</p>
    </section>
  );
};

export default Home;
