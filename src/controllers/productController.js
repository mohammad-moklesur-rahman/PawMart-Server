import { ObjectId } from "mongodb";
import { productsCollection } from "../models/productsModel.js";

// * Get Product By id
export const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await productsCollection().findOne({ _id: new ObjectId(id) });
  res.send(result);
};

// * Get All Products
export const getAllProduct = async (req, res) => {
  try {
    const { category } = req.query;

    const categoryMap = {
      "Pets (Adoption)": "Pets",
      "Pet Food": "Food",
      Accessories: "Accessories",
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

// *Get latest 6 listings products
export const getLatestListing = async (req, res) => {
  try {
    // Sort by date descending and limit to 6
    const listings = await productsCollection()
      .find()
      .sort({ date: -1 })
      .limit(6)
      .toArray();

    res.send(listings);
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
};

// * Create Products
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};
