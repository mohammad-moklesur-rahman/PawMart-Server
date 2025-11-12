import { ordersCollection } from "../models/ordersModel.js";

// * Get my orders
export const getMyOrders = async (req, res) => {
  try {
    const userEmail = req.query.email;

    if (!userEmail) {
      return res.status(400).send({ message: "email required" });
    }

    const myOrders = await ordersCollection()
      .find({ email: userEmail })
      .toArray();

    res.send(myOrders);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch" });
  }
};

// * Create Orders
export const createOrder = async (req, res) => {
  const doc = req.body;
  const result = await ordersCollection().insertOne(doc);
  res.send(result);
};
