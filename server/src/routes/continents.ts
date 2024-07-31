import express from "express";

import { getContinents } from "../controllers/continents";

const router = express.Router();

router.route("/").get(getContinents);

export default router;
