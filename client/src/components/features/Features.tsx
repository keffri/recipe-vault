import React, { FC } from 'react';
import FeaturesCard from './FeaturesCard';

type Card = {
  title: string;
  icon: any;
  description: string;
};

const createFeature: Card = {
  title: 'Create',
  icon: 'icon',
  description: 'description',
};

const tagFeature: Card = {
  title: 'Tag',
  icon: 'icon',
  description: 'description',
};

const saveFeature: Card = {
  title: 'Save',
  icon: 'icon',
  description: 'description',
};

const Features: FC = () => {
  return (
    <section className="features">
      <h1 className="features__title">Features</h1>
      <div className="features__container">
        <FeaturesCard card={createFeature} />
        <FeaturesCard card={tagFeature} />
        <FeaturesCard card={saveFeature} />
      </div>
    </section>
  );
};

export default Features;
