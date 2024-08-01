import { Model, DataTypes } from "sequelize";

import sequelize from "../database";
import { Continent } from "../services/getContinents/continents";

class Form extends Model {}

Form.init(
  {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING },
    birthdate: { type: DataTypes.DATE },
    continent: { type: DataTypes.ENUM, values: [...Object.values(Continent)] },
  },
  {
    sequelize,
    modelName: "form",
  }
);

export default Form;
