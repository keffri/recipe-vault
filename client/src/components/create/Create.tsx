import React, { FC, useState } from 'react';

type Recipe = {
  name: string;
  cuisine: string[];
  course: string[];
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

type ValidationError = {
  body: string;
  msg: string;
  param: string;
  value: string;
};

interface CreateProps {
  cookies: { [x: string]: any };
}

const Create: FC<CreateProps> = (props: CreateProps) => {
  const [recipeInfo, setRecipeInfo] = useState({
    name: '',
    cuisine: [],
    course: [],
    tags: [],
    prep_time: 0,
    cook_time: 0,
    total_time: 0,
    serves: 1,
    ingredients: [],
    instructions: [],
    notes: [],
    link: '',
  } as Recipe);

  const [nameError, setNameError] = useState<ValidationError[]>([]);
  const [cuisineError, setCuisineError] = useState<ValidationError[]>([]);
  const [courseError, setCourseError] = useState<ValidationError[]>([]);
  const [tagError, setTagError] = useState<ValidationError[]>([]);
  const [ingredientsError, setIngredientsError] = useState<ValidationError[]>(
    []
  );
  const [instructionsError, setInstructionsError] = useState<ValidationError[]>(
    []
  );

  const [cuisine, setCuisine] = useState('');
  const [course, setCourse] = useState('');
  const [tag, setTag] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');
  let cuisineText = '';
  let courseText = '';
  let tagText = '';
  let ingredientsText = '';
  let instructionsText = '';
  let notesText = '';

  const bracketText = (string: string) => {
    const regex = /\[(.*?)\]/g;
    const matches = string.match(regex);
    if (matches !== null) {
      return matches.map((match) => match.slice(1, -1));
    } else {
      return ['match fail'];
    }
  };

  const filterErrors = (errors: ValidationError[], paramName: string) => {
    return errors.filter((error: ValidationError) => error.param === paramName);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...recipeInfo }),
    });

    const data = await response.json();

    if (data.errors) {
      setNameError(filterErrors(data.errors, 'name'));
      setCuisineError(filterErrors(data.errors, 'cuisine'));
      setCourseError(filterErrors(data.errors, 'course'));
      setTagError(filterErrors(data.errors, 'tag'));
      setIngredientsError(filterErrors(data.errors, 'ingredients'));
      setInstructionsError(filterErrors(data.errors, 'instructions'));
    } else {
      console.log('success');
    }
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
            {nameError.length > 0 && nameError[0].msg && (
              <p style={{ color: 'red', margin: '5px 0' }}>
                {nameError[0].msg}
              </p>
            )}
            <input
              className="create__input"
              type="text"
              name="name"
              value={recipeInfo.name}
              onChange={(e) =>
                setRecipeInfo({ ...recipeInfo, name: e.target.value })
              }
            />
            <label className="create__label" htmlFor="cuisine">
              <p className="create--high">Cuisine:</p>
              {cuisineError.length > 0 && cuisineError[0].msg && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {cuisineError[0].msg}
                </p>
              )}
              <span className="create--low">
                (separate each cuisine with a comma)
              </span>
            </label>

            <input
              className="create__input"
              type="text"
              placeholder="Italian, Japanese, Indian..."
              name="cuisine"
              value={cuisine}
              onChange={(e) => {
                cuisineText = e.target.value;
                setCuisine(cuisineText);
                setRecipeInfo({
                  ...recipeInfo,
                  cuisine: e.target.value.split(',').map((c) => c.trim()),
                });
              }}
            />
            <label className="create__label" htmlFor="course">
              <p className="create--high">Course:</p>
              {courseError.length > 0 && courseError[0].msg && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {courseError[0].msg}
                </p>
              )}
              <span className="create--low">
                (separate each course with a comma)
              </span>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="Breakfast, lunch, dinner..."
              name="course"
              value={course}
              onChange={(e) => {
                courseText = e.target.value;
                setCourse(courseText);
                setRecipeInfo({
                  ...recipeInfo,
                  course: e.target.value.split(',').map((c) => c.trim()),
                });
              }}
            />
            <label className="create__label" htmlFor="tags">
              <p className="create--high">Tags:</p>
              {tagError.length > 0 && tagError[0].msg && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {tagError[0].msg}
                </p>
              )}
              <span className="create--low">
                (separate each tag with a comma)
              </span>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="Keto, dairy free, vegan..."
              name="tag"
              value={tag}
              onChange={(e) => {
                tagText = e.target.value;
                setTag(tagText);
                setRecipeInfo({
                  ...recipeInfo,
                  tags: e.target.value.split(',').map((c) => c.trim()),
                });
              }}
            />
            <label className="create__label" htmlFor="prep_time">
              <p className="create--high">Prep time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              name="prep_time"
              min={0}
              value={recipeInfo.prep_time}
              onChange={(e) => {
                const prepTime = Number(e.target.value);
                setRecipeInfo({
                  ...recipeInfo,
                  prep_time: prepTime,
                  total_time: recipeInfo.cook_time + prepTime,
                });
              }}
            />
            <label className="create__label" htmlFor="cook_time">
              <p className="create--high">Cook time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              name="cook_time"
              min={0}
              value={recipeInfo.cook_time}
              onChange={(e) => {
                const cookTime = Number(e.target.value);
                setRecipeInfo({
                  ...recipeInfo,
                  cook_time: Number(e.target.value),
                  total_time: recipeInfo.prep_time + cookTime,
                });
              }}
            />
            <label className="create__label" htmlFor="total_time">
              <p className="create--high">Total time:</p>
              <span className="create--low">(mins)</span>
            </label>
            <input
              className="create__input"
              type="number"
              name="total_time"
              min={0}
              value={recipeInfo.prep_time + recipeInfo.cook_time}
              readOnly={true}
            />
            <label className="create__label" htmlFor="serves">
              <p className="create--high">Serves:</p>
            </label>
            <input
              className="create__input"
              type="number"
              name="serves"
              min={1}
              value={recipeInfo.serves}
              onChange={(e) => {
                setRecipeInfo({
                  ...recipeInfo,
                  serves: Number(e.target.value),
                });
              }}
            />
            <label className="create__label" htmlFor="ingredients">
              <p className="create--high">Ingredients:</p>
              {ingredientsError.length > 0 && ingredientsError[0].msg && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {ingredientsError[0].msg}
                </p>
              )}
              <span className="create--low">
                (separate each ingredient with a comma)
              </span>
            </label>
            <textarea
              className="create__textarea"
              placeholder="Ingredient one, Ingredient two, Ingredient three..."
              name="ingredients"
              value={ingredients}
              onChange={(e) => {
                ingredientsText = e.target.value;
                setIngredients(ingredientsText);
                setRecipeInfo({
                  ...recipeInfo,
                  ingredients: e.target.value.split(',').map((c) => c.trim()),
                });
              }}
            />
            <label className="create__label" htmlFor="instructions">
              <p className="create--high">Instructions:</p>
              {instructionsError.length > 0 && instructionsError[0].msg && (
                <p style={{ color: 'red', marginTop: '8px' }}>
                  {instructionsError[0].msg}
                </p>
              )}
              <span className="create--low">
                (wrap separate instructions in brackets)
              </span>
            </label>
            <textarea
              className="create__textarea"
              placeholder="[Instruction one][Instruction two][Instruction three]..."
              name="instructions"
              value={instructions}
              onChange={(e) => {
                instructionsText = e.target.value;
                setInstructions(instructionsText);
                setRecipeInfo({
                  ...recipeInfo,
                  instructions: bracketText(instructionsText),
                });
              }}
            />
            <label className="create__label" htmlFor="notes">
              <p className="create--high">Notes:</p>
              <span className="create--low">
                (wrap separate notes in brackets)
              </span>
            </label>
            <textarea
              className="create__textarea"
              placeholder="[Note one][Note two][Note three]..."
              name="notes"
              value={notes}
              onChange={(e) => {
                notesText = e.target.value;
                setNotes(notesText);
                setRecipeInfo({
                  ...recipeInfo,
                  notes: bracketText(notesText),
                });
              }}
            />
            <label className="create__label" htmlFor="link">
              <p className="create--high">Link:</p>
            </label>
            <input
              className="create__input"
              type="text"
              placeholder="www.recipes.com/recipe"
              name="link"
              value={recipeInfo.link}
              onChange={(e) =>
                setRecipeInfo({ ...recipeInfo, link: e.target.value })
              }
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
