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
      <div className="featuresCard__icon">{props.card.icon}</div>
      <h2 className="featuresCard__title">{props.card.title}</h2>
      <p className="featuresCard__description">{props.card.description}</p>
    </section>
  );
};

export default FeaturesCard;
