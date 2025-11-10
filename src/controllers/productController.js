import { productsCollection } from "../models/productsModel.js";

// * Get All Products
export const getAllProduct = async (req, res) => {
  const result = await productsCollection().find().toArray();
  res.send(result);
};

// * Create Products
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};
