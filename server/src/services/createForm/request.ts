import { Continent } from "../getContinents/continents";

export interface CreateFormRequest {
    firstName: string;
    lastName: string;
    birthdate: Date;
    continent: Continent;
}
