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
        <label className="create__label" htmlFor="recipe_name">
          Recipe name:
        </label>
        <input className="create__input" type="text" />
        <label className="create__label" htmlFor="cuisine">
          Cuisine:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="Italian, Japanese, Indian..."
        />
        <label className="create__label" htmlFor="course">
          Course:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="Breakfast, lunch, dinner..."
        />
        <label className="create__label" htmlFor="tags">
          Tags:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="Keto, dairy free, vegan..."
        />
        <label className="create__label" htmlFor="prep_time">
          Prep time (mins):
        </label>
        <input
          className="create__input"
          type="number"
          min={0}
          defaultValue={0}
        />
        <label className="create__label" htmlFor="cook_time">
          Cook time (mins):
        </label>
        <input
          className="create__input"
          type="number"
          min={0}
          defaultValue={0}
        />
        <label className="create__label" htmlFor="total_time">
          Total time (mins):
        </label>
        <input
          className="create__input"
          type="number"
          min={0}
          defaultValue={0}
        />
        <label className="create__label" htmlFor="serves">
          Serves:
        </label>
        <input
          className="create__input"
          type="number"
          min={1}
          defaultValue={1}
        />
        <label className="create__label" htmlFor="ingredients">
          Ingredients:
        </label>
        <input className="create__input" type="text" />
        <label className="create__label" htmlFor="instructions">
          Instructions:
        </label>
        <input className="create__input" type="text" />
        <label className="create__label" htmlFor="notes">
          Notes:
        </label>
        <input className="create__input" type="text" />
        <label className="create__label" htmlFor="link">
          Link:
        </label>
        <input
          className="create__input"
          type="text"
          placeholder="www.recipes.com/recipe"
        />
        <input
          type="submit"
          className="create__submit"
          value={'Create Recipe'}
        />
      </form>
    </section>
  );
};

export default Create;
