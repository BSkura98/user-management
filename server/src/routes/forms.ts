import express from "express";

import { createForm, getForms } from "../controllers/forms";

const router = express.Router();

router.route("/").post(createForm).get(getForms);

export default router;
