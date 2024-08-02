import express, { Express } from "express";
import cors from "cors";

import continents from "./routes/continents";
import forms from "./routes/forms";

export const createApp = () => {
  const app: Express = express();

  app.use(express.json());
  app.use(cors());

  app.use("/api/continents", continents);
  app.use("/api/forms", forms);

  return app;
};
