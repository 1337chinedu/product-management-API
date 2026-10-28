const express = require("express");
const productRecords = require("./productRecords.js");

const app = express();
app.use(express.json())

const PORT = 8080;


app.get("/products", (req, res) => {
    res.status(200).json(productRecords)
    
})


app.get("/products/:id", (req, res) => {
    const productID = req.params.id
    const product = productRecords.find((el) => el.id == productID)
    res.status(200).json(product)

})


app.post("/products", () => {

})







app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
