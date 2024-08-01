import { Request, Response } from "express";

import { getContinentsService } from "../services/getContinents/service";
import { errorResponse } from "../utils/errorResponse";
import { RequestError } from "../errors/RequestError";

export const getContinents = (req: Request, res: Response) => {
  try {
    const continents = getContinentsService();
    res.status(200).json(continents);
  } catch (e) {
    errorResponse(res, e as RequestError);
  }
};
