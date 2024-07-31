import dotenv from "dotenv";

import sequelize from "./database";
import { createApp } from "./app";

dotenv.config();

sequelize.sync().then(() => console.log("Database is ready"));

const PORT = 3000;

const app = createApp();

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
