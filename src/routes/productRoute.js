import express from "express";
import { createProduct, deleteProduct, getAllProduct, getLatestListing, getProductById, getUserProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

// * Routes for Products
router.route('/')
  .get(getAllProduct)
  .post(createProduct)

  // * Route for my listings
  router.route('/my-listings')
    .get(getUserProducts)

  // * Route for latest listings product
  router.route('/latest')
    .get(getLatestListing)

  // *Route for Get product by id
  router.route('/:id')
    .get(getProductById)

  // * Route for update product by id
  router.route('/update/:id')
    .put(updateProduct)

  // * Route for delete product by id
  router.route('/delete/:id')
    .delete(deleteProduct)





export default router;