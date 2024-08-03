import { Continent } from "../../types/continents";

export const getContinentsService = () => {
  return Object.values(Continent);
};
