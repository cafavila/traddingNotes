import express from 'express'
import bodyParser from 'body-parser'
import backtestRoutes from '../interfaces/routes/backtestRoutes.js'

const app = express();
app.use(bodyParser.json());

app.use('/api', backtestRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})