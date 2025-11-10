import { productsCollection } from "../models/productsModel.js";

// * Create Products
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};
