import express from "express";
import { createProduct, deleteProduct, getAllProduct, getLatestListing, getProductById, getUserProducts, updateProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// * Routes for Products
router.route('/')
  .get(getAllProduct)
  .post(protect, createProduct)

  // * Route for my listings
  router.route('/my-listings')
    .get(protect, getUserProducts)

  // * Route for latest listings product
  router.route('/latest')
    .get(getLatestListing)

  // *Route for Get product by id
  router.route('/:id')
    .get(protect, getProductById)

  // * Route for update product by id
  router.route('/update/:id')
    .put(protect, updateProduct)

  // * Route for delete product by id
  router.route('/delete/:id')
    .delete(protect, deleteProduct)





export default router;