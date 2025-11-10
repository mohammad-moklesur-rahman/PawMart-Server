import express from "express";
import { createProduct, getAllProduct, getLatestListing } from "../controllers/productController.js";

const router = express.Router();

// * Routes for Products
router.route('/')
  .get(getAllProduct)
  .post(createProduct)

  // * Route for latest listings product
  router.route('/latest')
    .get(getLatestListing)



export default router;