import { getDB } from "../config/PawMartDB.config.js";

export const ordersCollection = () => {
  const db = getDB();
  return db.collection("orders");
};
