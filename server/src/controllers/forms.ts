import { Request, Response } from "express";

import { createFormService } from "../services/createForm/service";
import { getFormsService } from "../services/getForms/service";
import { getFormService } from "../services/getForm/service";
import { deleteFormService } from "../services/deleteForm/service";
import { RequestError } from "../errors/RequestError";
import { errorResponse } from "../utils/errorResponse";

export const createForm = async (req: Request, res: Response) => {
  try {
    const form = await createFormService(req);
    res.status(201).json(form);
  } catch (e) {
    errorResponse(res, e as RequestError);
  }
};

export const getForms = async (req: Request, res: Response) => {
  try {
    const forms = await getFormsService();
    res.status(200).json(forms);
  } catch (e) {
    errorResponse(res, e as RequestError);
  }
};

export const getForm = async (req: Request, res: Response) => {
  try {
    const form = await getFormService(Number(req.params.id));
    res.status(200).json(form);
  } catch (e) {
    errorResponse(res, e as RequestError);
  }
};

export const deleteForm = async (req: Request, res: Response) => {
  try {
    await deleteFormService(Number(req.params.id));
    res.status(204).send();
  } catch (e) {
    errorResponse(res, e as RequestError);
  }
};
