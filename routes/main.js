import express from "express";
const router = express.Router();

import { login, dashboard } from "../controllers/main.js";
import auth from "../middleware/auth.js";

router.route("/dashboard").get(auth, dashboard);
router.route("/login").post(login);

export default router;
