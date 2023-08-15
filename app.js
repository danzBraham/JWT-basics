import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import mainRouter from './routes/main.js';
import notFound from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';

// middleware
app.use(express.static('./public'));
app.use(express.json());

// route
app.use('/api/v1', mainRouter);

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
