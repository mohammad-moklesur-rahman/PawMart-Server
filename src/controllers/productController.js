import { productsCollection } from "../models/productsModel.js";

// * Get All Products
export const getAllProduct = async (req, res) => {
  try {
    const { category } = req.query;

    const categoryMap = {
      "Pets (Adoption)": "Pets",
      "Pet Food": "Food",
      "Accessories": "Accessories",
      "Pet Care Products": "Care Products",
    };

    const mongoCategory = categoryMap[category] || category;

    const filter = mongoCategory
      ? { category: { $regex: new RegExp(mongoCategory, "i") } }
      : {};

    const result = await productsCollection().find(filter).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

// * Create Products
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};
