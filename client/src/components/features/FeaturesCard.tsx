import React, { FC } from 'react';

type Card = {
  title: string;
  icon: any;
  description: string;
};

interface CardProps {
  card: Card;
}

const FeaturesCard: FC<CardProps> = (props: CardProps) => {
  return (
    <section className="featuresCard">
      <h1>{props.card.title}</h1>
      {props.card.icon}
      <p>{props.card.description}</p>
    </section>
  );
};

export default FeaturesCard;
