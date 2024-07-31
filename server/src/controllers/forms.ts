import { Request, Response } from "express";

import { createFormService } from "../services/createForm/service";

export const createForm = async (req: Request, res: Response) => {
  const form = await createFormService(req);
  res.status(201).json(form);
};
