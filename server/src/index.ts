import express from "express";
import dotenv from "dotenv";

import sequelize from "./database";
import Continent from "./models/Continent";

dotenv.config();

sequelize.sync().then(() => console.log("Database is ready"));

const app = express();

const PORT = 3000;

app.get("/api/continents", async (request, response) => {    
    const continents =  await Continent.findAll();
    response.send(continents);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
