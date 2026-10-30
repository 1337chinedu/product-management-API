const productRecords = require("../productRecords");

const createProduct = (req, res) => {
  const addProduct = {
    id: productRecords.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
  };

  productRecords.push(addProduct);

  res.status(201).json({
    code: 201,
    message: "New Product Has Been Created Successfully!",
  });
};

const products = (req, res) => {
  res.status(200).json(productRecords);
};

const findOneProduct = (req, res) => {
  const productID = req.params.id;
  const product = productRecords.find((el) => el.id == productID);

  if (!product) {
    res.status(404).json({
      code: 404,
      message: `item with the ID: ${productID} does not exist`,
    });
  } else {
    res.status(200).json(product);
  }
};

module.exports = { createProduct, products, findOneProduct };
