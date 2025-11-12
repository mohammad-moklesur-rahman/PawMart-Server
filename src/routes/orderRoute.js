import express from "express";
import { createOrder, getMyOrders } from "../controllers/orderControllers.js";

const router = express.Router();

// * Get My orders
router.get("/my-orders", getMyOrders);

// * Order Route
router.post("/", createOrder);

export default router;
