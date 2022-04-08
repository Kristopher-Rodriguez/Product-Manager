const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      console.log(allProducts);
      res.json({ product: allProducts });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};
