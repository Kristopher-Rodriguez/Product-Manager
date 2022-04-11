const Product = require("../models/product.model");

module.exports = {
  findAllProducts: (req, res) => {
    Product.find({})
      .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
      });
  },

  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  findOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};
