const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
import { Request, Response } from 'express';

exports.signup_post = [
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
        throw new Error('passwords must match each other');
      }
      return true;
    }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
      return;
    }

    const { email, password, confirm_password } = req.body;
    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
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
