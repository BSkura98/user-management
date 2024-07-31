import express from "express";

const app = express();

const PORT = 3000;

app.get("/api/continents", (request, response) => {
  response.send([
    "Afryka",
    "Ameryka Południowa",
    "Ameryka Północna",
    "Antarktyda",
    "Australia",
    "Azja",
    "Europa",
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
