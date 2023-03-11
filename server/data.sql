CREATE DATABASE recipe-vault;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);

CREATE TABLE recipes (
    recipe_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR (255) FOREIGN KEY REFERENCES users(id),
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
    recipe_id VARCHAR(255) FOREIGN KEY REFERENCES recipes(recipe_id),
    tag VARCHAR(12)
)

CREATE TABLE ingredients (
    ingredient_id VARCHAR(255) PRIMARY KEY,
    recipe_id VARCHAR(255) FOREIGN KEY REFERENCES recipes(recipe_id),
    ingredient VARCHAR(30)
)

CREATE TABLE instructions (
    instruction_id VARCHAR(255) PRIMARY KEY,
    recipe_id VARCHAR(255) FOREIGN KEY REFERENCES recipes(recipe_id),
    instruction VARCHAR(255)
) 

CREATE TABLE notes (
    note_id VARCHAR(255) PRIMARY KEY,
    recipe_id VARCHAR(255) FOREIGN KEY REFERENCES recipes(recipe_id),
    note VARCHAR(255)
)

