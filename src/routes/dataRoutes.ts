import express from "express";
import dotenv from "dotenv";
import getTopStats from "../controllers/getTopStats";
import getDeviation from "../controllers/getDeviation";
dotenv.config();

const router = express.Router();

router.get("top-stats", getTopStats);
router.get("deviation", getDeviation);

export default router;
