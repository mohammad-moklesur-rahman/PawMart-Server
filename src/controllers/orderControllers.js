import { ordersCollection } from "../models/ordersModel.js";

// * Create Orders
export const createOrder = async (req, res) => {
  const doc = req.body;
  const result = await ordersCollection().insertOne(doc);
  res.send(result);
};
