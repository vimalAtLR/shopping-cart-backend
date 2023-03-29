const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/Shoppingapp";
const port = 8000;
const products = require("./products");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
