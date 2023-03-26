import React, { FC } from 'react';

type Recipe = {
  name: string;
  cuisine: string;
  course: string;
  diet: string;
  tags: string[];
  prep_time: number;
  cook_time: number;
  total_time: number;
  serves: number;
  ingredients: string[];
  instructions: string[];
  notes: string[];
  link: string;
};

const Create: FC = () => {
  return (
    <section className="create">
      <h1 className="create__title">Create</h1>

      <form className="create__form">
        <label className="create__label" htmlFor="name">
          Name:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="recipe name..."
        />
        <label className="create__label" htmlFor="cuisine">
          Cuisine:
        </label>
        <input className="create__input" type="text" placeholder="cuisine..." />
        <label className="create__label" htmlFor="course">
          Course:
        </label>
        <input className="create__input" type="text" placeholder="course..." />
        <label className="create__label" htmlFor="tags">
          Tags:
        </label>
        <input className="create__input" type="text" placeholder="tag..." />
        <label className="create__label" htmlFor="prep_time">
          Prep time:
        </label>
        <input className="create__input" type="number" />
        <label className="create__label" htmlFor="cook_time">
          Cook time:
        </label>
        <input className="create__input" type="number" />
        <label className="create__label" htmlFor="total_time">
          Total time:
        </label>
        <input className="create__input" type="number" />
        <label className="create__label" htmlFor="serves">
          Serves:
        </label>
        <input className="create__input" type="number" />
        <label className="create__label" htmlFor="ingredients">
          Ingredients:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="ingredient..."
        />
        <label className="create__label" htmlFor="instructions">
          Instructions:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="instruction..."
        />
        <label className="create__label" htmlFor="notes">
          Notes:
        </label>
        <input className="create__input" type="text" placeholder="note..." />
        <label className="create__label" htmlFor="link">
          Link:
        </label>
        <input className="create__input" type="text" placeholder="link..." />
      </form>
    </section>
  );
};

export default Create;
