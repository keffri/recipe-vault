import React, { FC } from 'react';
import FeaturesCard from './FeaturesCard';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

type Card = {
  title: string;
  icon: any;
  description: string;
};

const createFeature: Card = {
  title: 'Create',
  icon: (
    <AddCircleOutlineOutlinedIcon
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
  description: 'description',
};

const tagFeature: Card = {
  title: 'Tag',
  icon: (
    <LocalOfferOutlinedIcon
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
  description: 'description',
};

const saveFeature: Card = {
  title: 'Save',
  icon: (
    <BookmarkBorderOutlinedIcon
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
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
