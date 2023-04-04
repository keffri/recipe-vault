const pool = require('../db');
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator');
import { Request, Response } from 'express';
