CREATE DATABASE recipe-vault;

CREATE TABLE (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);