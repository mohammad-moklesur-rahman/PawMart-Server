import express from "express";
import { createProduct, getAllProduct } from "../controllers/productController.js";

const router = express.Router();

// * Routes for Products
router.route('/')
  .get(getAllProduct)
  .post(createProduct)



export default router;