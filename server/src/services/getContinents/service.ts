import { Continent } from "./continents";

export const getContinentsService = () => {
  return Object.values(Continent);
};
