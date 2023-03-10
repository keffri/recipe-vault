import React, { FC } from 'react';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface ModalProps {
  openAuthModal: () => void;
}

const LandingPage: FC<ModalProps> = (props: ModalProps) => {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="landing__title">Recipe Vault</h1>
        <div className="landing__description">
          <ul className="landing__list">
            <li>
              <p>Create</p>
              <AddCircleOutlineOutlinedIcon className="landing__icon" />
            </li>
            <li>
              <p>Tag</p>
              <LocalOfferOutlinedIcon className="landing__icon" />
            </li>
            <li>
              <p>Save</p>
              <BookmarkBorderOutlinedIcon className="landing__icon" />
            </li>
          </ul>
        </div>
        <p className="landing__text landing--medium">
          Access all of your favorite recipes in one location!
        </p>
        <button
          data-testid="landingPage_button"
          className="landing__button"
          onClick={() => props.openAuthModal()}
        >
          Get started!
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
