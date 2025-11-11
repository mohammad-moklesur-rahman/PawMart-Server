import { getDB } from "../config/PawMartDB.config.js";

export const productsCollection = () => {
  const db = getDB();
  return db.collection("products");
};