import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getLatestListing,
  getProductById,
  getUserProducts,
  updateProduct,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// * Routes for Products
router.get("/", getAllProduct);
router.post("/", protect, createProduct);

// * Route for my listings
router.get("/my-listings", protect, getUserProducts);

// * Route for latest listings product
router.get("/latest", getLatestListing);

// *Route for Get product by id
router.get("/:id", protect, getProductById);

// * Route for update product by id
router.put("/update/:id", protect, updateProduct);

// * Route for delete product by id
router.delete("/delete/:id", protect, deleteProduct);

export default router;
