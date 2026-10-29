const express = require("express");
const productRecords = require("./productRecords.js");

const app = express();
app.use(express.json());

const PORT = 8080;

app.post("/products", (req, res) => {
  const addProduct = {
    id: productRecords.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
  };

  productRecords.push(addProduct);

  res.status(201).json("New Product Has Been Created Successfully!");
});

app.get("/products", (req, res) => {
  res.status(200).json(productRecords);
});

app.get("/products/:id", (req, res) => {
  const productID = req.params.id;
  const product = productRecords.find((el) => el.id == productID);
  res.status(200).json(product);
});

app.post("/products", () => {});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
