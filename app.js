import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import express from "express";
const app = express();
const port = 3000;
import mainRouter from "./routes/main.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server Listening on Port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
