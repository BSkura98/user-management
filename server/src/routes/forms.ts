import express from "express";

import { createForm } from "../controllers/forms";

const router = express.Router();

router.route("/").post(createForm);

export default router;
