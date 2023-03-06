require('dotenv').config();
import express from 'express';

const cors = require('cors');

const port = process.env.PORT || 8000;

const router = require('../api/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});
