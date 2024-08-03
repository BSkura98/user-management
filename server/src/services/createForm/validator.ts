import { Validator, Schema } from "jsonschema";

import { BadRequestError } from "../../errors/BadRequestError";
import { Continent } from "../../types/continents";
import { isFuture } from "date-fns";

export const validate = (body: any) => {
  const validator = new Validator();

  const validation = validator.validate(body, validationSchema);
  
  if (!validation.valid) {
    throw new BadRequestError("Invalid request body");
  }
  if(body.continent === Continent.Europe && (!body.lastName || body.lastName.length < 2)){
    throw new BadRequestError("Last name cannot be shorter than 2 characters for Europe")
  }
  if(isFuture(body.birthdate)){
    throw new BadRequestError("Birthdate cannot be in the future");
  }
};

const validationSchema: Schema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: ["string", "null"],
    },
    birthdate: {
      type: ["string", "null"],
      format: "date",
    },
    continent: {
      type: ["string", "null"],
      enum: [...Object.values(Continent)],
    },
  },
};
