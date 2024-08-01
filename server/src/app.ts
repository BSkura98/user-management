import express, { Express } from "express";

import continents from "./routes/continents";
import forms from "./routes/forms";

export const createApp = () => {
  const app: Express = express();

  app.use(express.json());

  app.use("/api/continents", continents);
  app.use("/api/forms", forms);

  return app;
};
