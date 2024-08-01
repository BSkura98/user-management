import express from "express";

import { createForm, getForm, getForms, deleteForm } from "../controllers/forms";

const router = express.Router();

router.route("/").post(createForm).get(getForms);
router.route("/:id").get(getForm).delete(deleteForm);

export default router;
