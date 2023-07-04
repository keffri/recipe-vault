const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
import { Request, Response } from 'express';

exports.signup_post = [
  body('email')
    .trim()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    .isLength({ min: 6 })
    .escape()
    .withMessage('Please enter a valid email address.'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.'),
  body('confirm_password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters..')
    .custom(async (value: string, { req }: any) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must match each other.');
      }
      return true;
    }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors);
      return;
    }

    const { email, password } = req.body;
    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const users = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (users.rows.length) {
      return res.json({ detail: 'Email is already being used.' });
    }
    try {
      const signUp = await pool.query(
        `INSERT INTO users (id, email, hashed_password) VALUES($1, $2, $3)`,
        [id, email, hashedPassword]
      );

      const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

      res.json({ email, token });
    } catch (error) {
      console.error(error);
    }
  },
];

exports.login_post = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (!users.rows.length) {
      return res.json({ detail: 'Email does not exist.' });
    }

    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    );

    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

    if (success) {
      res.json({ email: users.rows[0].email, token });
    } else {
      res.json({ detail: 'Incorrect password.' });
    }
  } catch (error) {
    console.error(error);
  }
};
