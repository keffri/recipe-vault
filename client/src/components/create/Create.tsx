import React, { FC, useState } from 'react';

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

interface CreateProps {
  cookies: { [x: string]: any };
}

const Create: FC<CreateProps> = (props: CreateProps) => {
  const [recipeInfo, setRecipeInfo] = useState({
    name: '',
    cuisine: '',
    course: '',
    diet: '',
    tags: [],
    prep_time: 0,
    cook_time: 0,
    total_tile: 0,
    serves: 0,
    ingredients: [],
    instructions: [],
    notes: [],
    link: '',
  });
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...recipeInfo }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <section className="create">
      {!props.cookies.AuthToken && (
        <div className="create__fail">
          <h2 className="create__fail--center">
            Please log in if you wish to create a recipe.
          </h2>
        </div>
      )}
      {props.cookies.AuthToken && (
        <div className="create__pass">
          <h1
            className="create__title"
            onClick={() => {
              console.log(props.cookies);
            }}
          >
            Create
          </h1>

          <form className="create__form">
            <label className="create__label" htmlFor="recipe_name">
              <p className="create--high">Recipe name:</p>
            </label>
            <input
              className="create__input"
              type="text"
              value={recipeInfo.name}
              onChange={(e) =>
                setRecipeInfo({ ...recipeInfo, name: e.target.value })
              }
            />
            <label className="create__label" htmlFor="cuisine">
              <p className="create--high">Cuisine:</p>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="Italian, Japanese, Indian..."
              value={recipeInfo.cuisine}
              onChange={(e) =>
                setRecipeInfo({ ...recipeInfo, cuisine: e.target.value })
              }
            />
            <label className="create__label" htmlFor="course">
              <p className="create--high">Course:</p>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="Breakfast, lunch, dinner..."
            />
            <label className="create__label" htmlFor="tags">
              <p className="create--high">Tags:</p>
              <span className="create--low">
                (separate each tag with a comma)
              </span>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="Keto, dairy free, vegan..."
            />
            <label className="create__label" htmlFor="prep_time">
              <p className="create--high">Prep time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              min={0}
              defaultValue={0}
            />
            <label className="create__label" htmlFor="cook_time">
              <p className="create--high">Cook time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              min={0}
              defaultValue={0}
            />
            <label className="create__label" htmlFor="total_time">
              <p className="create--high">Total time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              min={0}
              defaultValue={0}
            />
            <label className="create__label" htmlFor="serves">
              <p className="create--high">Serves:</p>
            </label>
            <input
              className="create__input"
              type="number"
              min={1}
              defaultValue={1}
            />
            <label className="create__label" htmlFor="ingredients">
              <p className="create--high">Ingredients:</p>
              <span className="create--low">
                (separate each ingredient with a comma)
              </span>
            </label>
            <input className="create__input" type="text" />
            <label className="create__label" htmlFor="instructions">
              <p className="create--high">Instructions:</p>
            </label>
            <input className="create__input" type="text" />
            <label className="create__label" htmlFor="notes">
              <p className="create--high">Notes:</p>
            </label>
            <input className="create__input" type="text" />
            <label className="create__label" htmlFor="link">
              <p className="create--high">Link:</p>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="www.recipes.com/recipe"
            />
            <input
              type="submit"
              className="create__submit"
              onClick={(e) => handleSubmit(e)}
              value={'Create Recipe'}
            />
          </form>
        </div>
      )}
    </section>
  );
};

export default Create;
