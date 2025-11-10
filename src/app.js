import express from "express";
import cors from "cors";
import { connectDB } from "./config/PawMartDB.config.js";
import productRoute from "./routes/productRoute.js";

const app = express();
connectDB();

// * middleware
app.use(cors());
app.use(express.json());

// * Products Route
app.use("/api/products", productRoute);

// * Root Route
app.get("/", (req, res) => {
  res.send("Welcome to backend Server!");
});

export default app;
