require('dotenv').config();
import express from 'express';
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});
