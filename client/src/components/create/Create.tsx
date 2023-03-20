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
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="recipe name..." />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" placeholder="cuisine..." />
        <label htmlFor="course">Course:</label>
        <input type="text" placeholder="course..." />
        <label htmlFor="tags">Tags:</label>
        <input type="text" placeholder="tag..." />
        <label htmlFor="prep_time">Prep time:</label>
        <input type="number" />
        <label htmlFor="cook_time">Cook time:</label>
        <input type="number" />
        <label htmlFor="total_time">Total time:</label>
        <input type="number" />
        <label htmlFor="serves">Serves:</label>
        <input type="number" />
        <label htmlFor="ingredients">Ingredients:</label>
        <input type="text" placeholder="ingredient..." />
        <label htmlFor="instructions">Instructions:</label>
        <input type="text" placeholder="instruction..." />
        <label htmlFor="notes">Notes:</label>
        <input type="text" placeholder="note..." />
        <label htmlFor="link">Link</label>
        <input type="text" placeholder="link..." />
      </form>
    </section>
  );
};

export default Create;
