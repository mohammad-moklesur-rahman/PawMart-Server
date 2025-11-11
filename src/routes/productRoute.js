import express from "express";
import { createProduct, getAllProduct, getLatestListing, getProductById } from "../controllers/productController.js";

const router = express.Router();

// * Routes for Products
router.route('/')
  .get(getAllProduct)
  .post(createProduct)

  // * Route for latest listings product
  router.route('/latest')
    .get(getLatestListing)

  // *Route for Get product by id
  router.route('/:id')
    .get(getProductById)




export default router;