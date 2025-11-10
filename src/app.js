import express from "express";
import cors from "cors";

const app = express();

// * middleware
app.use(cors());
app.use(express.json());

// * Root Route
app.get('/', (req, res) => {
  res.send('Welcome to backend Server!')
})


export default app;
