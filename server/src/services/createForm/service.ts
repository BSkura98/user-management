import { Request } from "express";

import Form from "../../models/Form";
import { validate } from "./validator";

export const createFormService = async (request: Request) => {
  validate(request.body);
  return await Form.create({ ...request.body });
};
