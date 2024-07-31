import { Request, Response } from "express";

import { getContinentsService } from "../services/getContinents/service";

export const getContinents = (req: Request, res: Response) => {
  const continents = getContinentsService();
  res.status(200).json(continents);
};
