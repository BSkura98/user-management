import { Model, DataTypes } from "sequelize";

import sequelize from "../database";

class Continent extends Model {}

Continent.init({
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'continent'
})

export default Continent;
