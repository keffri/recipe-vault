CREATE DATABASE recipe-vault;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);

CREATE TABLE recipes (
    recipe_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY user_id VARCHAR (255) REFERENCES users(id),
    title VARCHAR (40),
    course VARCHAR(20),
    cuisine VARCHAR(20),
    diet VARCHAR(20),
    prep_time INTEGER,
    cook_time INTEGER,
    total_time INTEGER,
    serves INTEGER,
    link VARCHAR(255)
) 

CREATE TABLE tags (
    tag_id VARCHAR(255) PRIMARY KEY,
    tag VARCHAR(12)
)

CREATE TABLE recipe_tags (
    FOREIGN KEY recipe_id VARCHAR(255) REFERENCES recipes(recipe_id),
    FOREIGN KEY tag_id VARCHAR(255) REFERENCES tags(tag_id),
    PRIMARY KEY (recipe_id, tag_id)
)

CREATE TABLE ingredients (
    ingredient_id VARCHAR(255) PRIMARY KEY,
    ingredient VARCHAR(30)
)

CREATE TABLE recipe_ingredients (
    FOREIGN KEY recipe_id VARCHAR(255) REFERENCES recipes(recipe_id),
    FOREIGN KEY ingredient_id VARCHAR(255) REFERENCES ingredients(ingredient_id),
    PRIMARY KEY (recipe_id, ingredient_id)
)

CREATE TABLE instructions (
    instruction_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY recipe_id VARCHAR(255) REFERENCES recipes(recipe_id),
    instruction VARCHAR(255)
) 

CREATE TABLE notes (
    note_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY recipe_id VARCHAR(255) REFERENCES recipes(recipe_id),
    note VARCHAR(255)
)
