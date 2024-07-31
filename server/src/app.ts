import express, { Express } from "express";

import continents from "./routes/continents";

export const createApp = () => {
  const app: Express = express();

  app.use(express.json());

  app.use("/api/continents", continents);

  return app;
};
