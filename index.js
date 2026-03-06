import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// health check
app.get("/", (req, res) => {
  res.send("E-commerce catalog API is running");
});

// connect database once
connectDB();

// export the app for Vercel serverless
export default app;
