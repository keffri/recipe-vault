const pool = require('../db');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
import { Request, Response } from 'express';

exports.create_post = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('You must enter a longer recipe name.')
    .isLength({ max: 30 })
    .escape()
    .withMessage('You must enter a shorter recipe name'),
  body('cuisine')
    .trim()
    .isLength({ min: 4 })
    .escape()
    .withMessage('You must enter at least one cuisine.'),
  body('course')
    .trim()
    .isLength({ min: 4 })
    .escape()
    .withMessage('You must enter at least one course.'),
  body('tags')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('You must enter at least one tag.'),
  body('ingredients')
    .trim()
    .isLength({ min: 4 })
    .escape()
    .withMessage('Recipe must contain at least one ingredient.'),
  body('instructions')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Recipe must contain at least one instruction.'),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors);
      return;
    }

    res.status(200).json({ message: 'Post successful.' });
  },
];
