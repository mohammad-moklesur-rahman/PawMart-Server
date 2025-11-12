import express from "express";
import { createOrder, getMyOrders } from "../controllers/orderControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// * Get My orders
router.get("/my-orders", protect, getMyOrders);

// * Order Route
router.post("/", protect, createOrder);

export default router;
