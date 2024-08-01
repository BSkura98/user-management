import { Request } from "express";

import Form from "../../models/Form";

export const createFormService = async (request: Request) => {
  return await Form.create({ ...request.body });
};
