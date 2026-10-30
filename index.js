const express = require("express");
// const productRecords = require("./productRecords.js");
const {createProduct, products, findOneProduct} = require("./controllers/productController.js")

const app = express();
app.use(express.json());

const PORT = 8080;




app.post("/products", createProduct);

app.get("/products", products);

app.get("/products/:id", findOneProduct);







app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
