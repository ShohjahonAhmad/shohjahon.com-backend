import express from "express";
import * as leetcodeControllers from "../controllers/leetcode.js";
const router = express.Router();
router.get("/", leetcodeControllers.getResults);
export default router;
