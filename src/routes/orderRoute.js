import express from "express";
import { createOrder } from "../controllers/orderControllers.js";

const router = express.Router();

// * Order Route
router.post("/", createOrder);

export default router;
